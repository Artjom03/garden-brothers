# Garden Brothers Site

Vite + React website for Garden Brothers with separate pages and production mail sending via Vercel serverless functions.

## Local Development

```bash
npm install
npm run dev
```

## Production Deployment (Vercel)

1. Push your latest code to GitHub.
2. In Vercel, import this repository.
3. Set Root Directory to `garden-brothers-site`.
4. Keep build settings:

- Framework: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

5. Add these Environment Variables in Vercel (Production + Preview):

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` (recommended: verified sender in Resend)

6. Redeploy.

## Why Routes Work On Vercel

`vercel.json` is configured with a filesystem-first route and SPA fallback, so:

- API endpoints under `/api/*` work.
- BrowserRouter pages like `/diensten`, `/faq`, `/offerte`, `/contact` also work.

## Email Endpoints

- `POST /api/send-email` handles both forms (`contact` and `offerte`).
- `GET /api/email-health` returns config readiness (without exposing secrets).

Example `email-health` response:

```json
{
	"ok": true,
	"provider": "resend",
	"config": {
		"resendApiKey": true,
		"contactToEmail": true,
		"contactFromEmail": true
	}
}
```

## Production Test Checklist

1. Open `https://<your-domain>/api/email-health`.
2. Confirm `ok: true`.
3. Submit `/offerte` form.
4. Submit `/contact` form.
5. Verify both show success message and emails arrive in `CONTACT_TO_EMAIL` inbox.
6. If failure, check Vercel Function Logs for `/api/send-email`.
