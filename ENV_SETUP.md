# Environment Variables Setup

To enable email functionality for the contact form, you need to configure SMTP settings.

## Step 1: Create `.env.local` file

Create a `.env.local` file in the root directory of your project with the following variables:

```env
# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Contact email where form submissions will be sent
CONTACT_EMAIL=your-contact-email@gmail.com

# Node Environment
NODE_ENV=development
```

## Step 2: Gmail Setup (Recommended)

### Option A: Using Gmail with App Password (Recommended)

1. Go to your Google Account settings: https://myaccount.google.com/
2. Enable 2-Step Verification if not already enabled
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Generate a new App Password for "Mail"
5. Copy the 16-character password
6. Use this password in `SMTP_PASSWORD`

**Settings for Gmail:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password
```

### Option B: Using Other Email Providers

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

#### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
```

#### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASSWORD=your-password
```

## Step 3: Configure Contact Email

Set `CONTACT_EMAIL` to the email address where you want to receive contact form submissions. This can be the same as `SMTP_USER` or a different email address.

## Step 4: Restart Development Server

After creating/updating `.env.local`, restart your Next.js development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on the website
2. Submit the form
3. Check your email inbox (the email specified in `CONTACT_EMAIL`)
4. The customer should also receive a confirmation email

## Troubleshooting

### "Invalid login" or "Authentication failed"
- Make sure you're using an App Password for Gmail (not your regular password)
- Verify that 2-Step Verification is enabled
- Check that `SMTP_USER` and `SMTP_PASSWORD` are correct

### "Connection timeout"
- Check your firewall settings
- Verify `SMTP_HOST` and `SMTP_PORT` are correct
- Try using port 465 with `SMTP_SECURE=true` for some providers

### Emails not sending
- Check the server console for error messages
- Verify all environment variables are set correctly
- Make sure `.env.local` is in the root directory (not in `app/` or `components/`)

## Security Notes

- Never commit `.env.local` to version control (it's already in `.gitignore`)
- Use App Passwords instead of your main account password
- For production, use environment variables provided by your hosting platform (Vercel, Netlify, etc.)
