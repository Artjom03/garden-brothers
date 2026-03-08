function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

export default function handler(_req, res) {
  const hasApiKey = Boolean(process.env.RESEND_API_KEY);
  const hasToEmail = Boolean(process.env.CONTACT_TO_EMAIL);
  const hasFromEmail = Boolean(process.env.CONTACT_FROM_EMAIL);

  return sendJson(res, 200, {
    ok: hasApiKey && hasToEmail,
    provider: "resend",
    config: {
      resendApiKey: hasApiKey,
      contactToEmail: hasToEmail,
      contactFromEmail: hasFromEmail,
    },
  });
}
