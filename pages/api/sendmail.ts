import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    const { email, name, message } = req.body;

    // Ensure that sender and recipient emails are defined
    const senderEmail = process.env.EMAIL_SENDER || 'default-sender@example.com'; // Provide a default or handle error
    const recipientEmail = process.env.EMAIL_RECIPIENT || 'default-recipient@example.com'; // Provide a default or handle error

    const msg = {
        to: recipientEmail,
        from: senderEmail,
        subject: `New Message from ${name}`,
        text: message,
        html: `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Message:</strong> ${message}`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error: any) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
};

export default sendMail;