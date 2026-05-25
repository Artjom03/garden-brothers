function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

function normalizeBody(req) {
  if (!req.body) return null;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  return req.body;
}

const MAX_ATTACHMENTS = 5;
const MAX_ATTACHMENT_SIZE_BYTES = 2 * 1024 * 1024;
const MAX_TOTAL_ATTACHMENTS_SIZE_BYTES = 3 * 1024 * 1024;

function sanitizeAttachments(rawAttachments) {
  if (!Array.isArray(rawAttachments) || rawAttachments.length === 0) {
    return [];
  }

  if (rawAttachments.length > MAX_ATTACHMENTS) {
    return { error: `Too many attachments. Maximum is ${MAX_ATTACHMENTS}.` };
  }

  let totalSize = 0;
  const attachments = [];

  for (const attachment of rawAttachments) {
    if (!attachment || typeof attachment !== "object") {
      return { error: "Invalid attachment payload" };
    }

    const filename = typeof attachment.filename === "string" ? attachment.filename.trim() : "";
    const content = typeof attachment.content === "string" ? attachment.content.trim() : "";
    const contentType = typeof attachment.contentType === "string"
      ? attachment.contentType.trim()
      : undefined;
    const size = Number(attachment.size || 0);

    if (!filename || !content) {
      return { error: "Attachment is missing filename or content" };
    }

    if (!Number.isFinite(size) || size <= 0) {
      return { error: `Attachment size is invalid for ${filename}` };
    }

    if (size > MAX_ATTACHMENT_SIZE_BYTES) {
      return { error: `Attachment too large: ${filename} (max 2 MB)` };
    }

    totalSize += size;
    if (totalSize > MAX_TOTAL_ATTACHMENTS_SIZE_BYTES) {
      return { error: "Total attachment size is too large (max 3 MB)" };
    }

    attachments.push(
      contentType
        ? { filename, content, content_type: contentType }
        : { filename, content }
    );
  }

  return attachments;
}

function buildEmailPayload(formType, data) {
  if (formType === "offerte") {
    const required = ["name", "email", "subject", "message", "sector", "size"];
    for (const key of required) {
      if (!data[key]) {
        return { error: `Missing required field: ${key}` };
      }
    }

    const text = [
      "Nieuwe offerteaanvraag",
      "",
      `Naam: ${data.name}`,
      `Adres: ${data.address || "-"}`,
      `Telefoon: ${data.phone || "-"}`,
      `E-mail: ${data.email}`,
      `Onderwerp: ${data.subject}`,
      `Sector: ${data.sector}`,
      `Grootte van de grond: ${data.size}`,
      "",
      "Bericht:",
      data.message,
      "",
      `Bestanden toegevoegd in formulier: ${data.hasFiles ? "Ja" : "Nee"}`,
      `Aantal bijlagen: ${Array.isArray(data.attachments) ? data.attachments.length : 0}`,
    ].join("\n");

    const attachments = sanitizeAttachments(data.attachments);
    if (attachments.error) {
      return { error: attachments.error };
    }

    return {
      subject: `Offerteaanvraag - ${data.subject}`,
      text,
      attachments,
    };
  }

  if (formType === "contact") {
    const required = ["name", "email", "subject", "message"];
    for (const key of required) {
      if (!data[key]) {
        return { error: `Missing required field: ${key}` };
      }
    }

    const text = [
      "Nieuw contactbericht",
      "",
      `Naam: ${data.name}`,
      `Adres: ${data.address || "-"}`,
      `Telefoon: ${data.phone || "-"}`,
      `E-mail: ${data.email}`,
      `Onderwerp: ${data.subject}`,
      "",
      "Bericht:",
      data.message,
    ].join("\n");

    return {
      subject: `Contact - ${data.subject}`,
      text,
    };
  }

  return { error: "Invalid form type" };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return sendJson(res, 405, { ok: false, message: "Method not allowed" });
  }

  const body = normalizeBody(req);
  if (!body) {
    return sendJson(res, 400, { ok: false, message: "Invalid JSON body" });
  }

  const { formType, data } = body;
  if (!formType || !data || typeof data !== "object") {
    return sendJson(res, 400, { ok: false, message: "Missing formType or data" });
  }

  const emailPayload = buildEmailPayload(formType, data);
  if (emailPayload.error) {
    return sendJson(res, 400, { ok: false, message: emailPayload.error });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "info@yardbrothers.be";

  if (!apiKey || !to) {
    return sendJson(res, 500, {
      ok: false,
      message: "Mail provider is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL.",
    });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: emailPayload.subject,
        text: emailPayload.text,
        attachments: emailPayload.attachments,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return sendJson(res, 502, {
        ok: false,
        message: result?.message || "Failed to send email",
      });
    }

    return sendJson(res, 200, {
      ok: true,
      message: "Email sent successfully",
      id: result?.id,
    });
  } catch {
    return sendJson(res, 500, {
      ok: false,
      message: "Unexpected server error while sending email",
    });
  }
}
