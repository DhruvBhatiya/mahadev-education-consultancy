# Mahadev Education Consultancy - Next.js Website

A modern, responsive website for Mahadev Education Consultancy built with Next.js, featuring study abroad services and visa consultancy.

## Features

- 🏠 **Home Page** - Hero section, services preview, countries, and why choose us
- 📖 **About Page** - Company information, values, team, and branches
- 💼 **Services Page** - Detailed visa services (Student, Work, Visitor) and study destinations
- 📞 **Contact Page** - Contact form and office information

## Design

- **Color Scheme**: Blue (#0b2b4a), Orange (#f39c12), and White
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, attractive interface with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Email account (Gmail recommended) for contact form functionality

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your email credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   CONTACT_EMAIL=your-contact-email@gmail.com
   ```

3. **For Gmail Setup:**
   - Enable 2-Step Verification on your Google account
   - Generate an App Password: https://support.google.com/accounts/answer/185833
   - Use the App Password as `SMTP_PASSWORD` (not your regular password)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

**Note:** Make sure to set your environment variables in your production hosting platform (Vercel, Netlify, etc.)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   ├── page.tsx
│   │   └── About.css
│   ├── services/
│   │   ├── page.tsx
│   │   └── Services.css
│   └── contact/
│       ├── page.tsx
│       └── Contact.css
├── components/
│   ├── Navbar.tsx
│   ├── Navbar.css
│   ├── Footer.tsx
│   └── Footer.css
└── public/
    └── logo.png            # Company logo
```

## Pages

- **Home** (`/`) - Main landing page with hero section and featured content
- **About** (`/about`) - Company information and team details
- **Services** (`/services`) - Visa services and study destinations
- **Contact** (`/contact`) - Contact form and office information

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS Modules
- Nodemailer (for email functionality)

## Email Configuration

The contact form sends emails using SMTP. The system sends two emails:
1. **Admin Email** - Sent to your `CONTACT_EMAIL` with the form submission details
2. **Confirmation Email** - Sent to the user confirming their submission

### Supported Email Providers

- **Gmail** (Recommended) - Use App Password
- **Outlook/Hotmail** - Use App Password
- **Custom SMTP** - Configure with your provider's settings

### Alternative Email Services

You can also use services like:
- **Resend** - Modern email API
- **SendGrid** - Transactional email service
- **Mailgun** - Email delivery service

To use these, modify `app/api/contact/route.ts` with the appropriate SDK.

## Email Configuration

The contact form sends emails using nodemailer. To enable email functionality:

1. Create a `.env.local` file in the root directory:
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=your-contact-email@gmail.com
```

2. **For Gmail users:**
   - Enable 2-Step Verification on your Google account
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Use the generated App Password as `SMTP_PASSWORD`

3. **Alternative Email Services:**
   - **Outlook/Hotmail**: `smtp-mail.outlook.com`, port `587`
   - **SendGrid**: Use their SMTP settings
   - **Mailgun**: Use their SMTP settings
   - **AWS SES**: Use their SMTP settings

The contact form will:
- Send a notification email to the admin (`CONTACT_EMAIL`)
- Send a confirmation email to the user who submitted the form

## Contact Information

- **Office**: 76000 92449 | 70414 15851
- **Dhruval Brahmbhatt**: 8490892700
- **Address**: B-109, Joyos Hubtown, Modhera Circle
- **Branches**: Mehsana, Ahmedabad, Unjha, Visnagar, Patan

## License

© 2026 Mahadev Education Consultancy. All rights reserved.
