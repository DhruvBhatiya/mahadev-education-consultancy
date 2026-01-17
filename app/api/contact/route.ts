import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content for admin/company
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0b2b4a; border-bottom: 3px solid #f39c12; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #0b2b4a;">Name:</strong> ${name}</p>
            <p><strong style="color: #0b2b4a;">Email:</strong> ${email}</p>
            <p><strong style="color: #0b2b4a;">Phone:</strong> ${phone}</p>
            <p><strong style="color: #0b2b4a;">Service Interested In:</strong> ${service}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #f39c12; margin: 20px 0;">
            <p><strong style="color: #0b2b4a;">Message:</strong></p>
            <p style="color: #333; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>This email was sent from the Mahadev Education Consultancy contact form.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    }

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank You for Contacting Mahadev Education Consultancy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0b2b4a, #123c66); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">Mahadev Education Consultancy</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #0b2b4a;">Thank You, ${name}!</h2>
            <p style="color: #333; line-height: 1.6;">
              We have received your inquiry regarding <strong>${service}</strong>. 
              Our team will review your message and get back to you within 24-48 hours.
            </p>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Your Details:</strong></p>
              <p style="margin: 5px 0;">Name: ${name}</p>
              <p style="margin: 5px 0;">Email: ${email}</p>
              <p style="margin: 5px 0;">Phone: ${phone}</p>
              <p style="margin: 5px 0;">Service: ${service}</p>
            </div>
            <p style="color: #333; line-height: 1.6;">
              In the meantime, feel free to contact us directly:
            </p>
            <div style="background-color: #f39c12; color: #ffffff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>📞 Office:</strong> 76000 92449 | 70414 15851</p>
              <p style="margin: 5px 0;"><strong>📱 Dhruval Brahmbhatt:</strong> 8490892700</p>
              <p style="margin: 5px 0;"><strong>📍 Address:</strong> B-109, Joyos Hubtown, Modhera Circle</p>
            </div>
          </div>
          <div style="background-color: #0b2b4a; color: #ffffff; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">© 2026 Mahadev Education Consultancy. All rights reserved.</p>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully! We will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    )
  }
}
