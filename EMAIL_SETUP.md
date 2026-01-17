# Email Setup Guide

This guide will help you configure the contact form to send emails.

## Gmail Setup (Recommended)

### Step 1: Enable 2-Step Verification
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" and "Other (Custom name)"
3. Enter "Mahadev Education Consultancy" as the name
4. Click "Generate"
5. Copy the 16-character password (no spaces)

### Step 3: Configure Environment Variables
Create a `.env.local` file in the root directory:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-character-app-password
CONTACT_EMAIL=your-contact-email@gmail.com
NODE_ENV=development
```

## Outlook/Hotmail Setup

### Step 1: Generate App Password
1. Go to: https://account.microsoft.com/security
2. Enable 2-Step Verification
3. Go to Advanced security options
4. Create a new app password
5. Copy the password

### Step 2: Configure Environment Variables
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=your-contact-email@outlook.com
NODE_ENV=development
```

## Custom SMTP Setup

For other email providers, use their SMTP settings:

```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@domain.com
SMTP_PASSWORD=your-password
CONTACT_EMAIL=your-contact-email@domain.com
NODE_ENV=development
```

### Common SMTP Settings

**Yahoo Mail:**
- Host: `smtp.mail.yahoo.com`
- Port: `587`

**Zoho Mail:**
- Host: `smtp.zoho.com`
- Port: `587`

**Custom Domain (cPanel):**
- Host: `mail.yourdomain.com`
- Port: `587` or `465` (for SSL)

## Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page: `http://localhost:3000/contact`

3. Fill out and submit the form

4. Check:
   - Your email inbox (admin email)
   - The user's email inbox (confirmation email)

## Troubleshooting

### Error: "Invalid login"
- Double-check your email and password
- For Gmail, make sure you're using an App Password, not your regular password
- Ensure 2-Step Verification is enabled

### Error: "Connection timeout"
- Check your firewall settings
- Verify SMTP port is correct (587 for TLS, 465 for SSL)
- Try changing `SMTP_SECURE` to `true` if using port 465

### Emails not sending
- Check server logs in the terminal
- Verify all environment variables are set correctly
- Test with a different email provider

### Production Deployment

When deploying to production (Vercel, Netlify, etc.):
1. Add environment variables in your hosting platform's dashboard
2. Use the same variable names as in `.env.local`
3. Never commit `.env.local` to git (it's already in `.gitignore`)

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords
- Keep your SMTP credentials secure
- Consider using environment-specific email accounts for production
