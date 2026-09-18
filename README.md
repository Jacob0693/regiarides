# Regia Rides

SEO-first Next.js website for Regia Rides, operated by Regia Mobility Group LLC.

## Local development

```bash
pnpm install
pnpm dev
```

## Hostinger staging deployment

- Domain: `staging.regiarides.com`
- Repository: `https://github.com/Jacob0693/regiarides`
- Branch: `staging`
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Start command: `pnpm start`
- Node.js: `20.9.0` or newer

Environment variables:

```text
NEXT_PUBLIC_SITE_URL=https://staging.regiarides.com
NEXT_PUBLIC_SITE_INDEXABLE=false
APP_ENV=staging
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=requests@regiarides.com
SMTP_PASSWORD=<store as a Hostinger secret>
REQUEST_FROM_EMAIL=Regia Rides <requests@regiarides.com>
REQUEST_NOTIFICATION_EMAIL=requests@regiarides.com
REQUEST_REPLY_TO=support@regiarides.com
```

Keep staging blocked from search indexing. Production uses `NEXT_PUBLIC_SITE_INDEXABLE=true` only after the approved launch gate.

The request form remains in safe preview mode until every required SMTP setting is present. Once configured, `/api/requests` validates submissions, applies basic spam and rate-limit checks, sends the complete request to the operations mailbox, and sends the customer a reference-number confirmation.
