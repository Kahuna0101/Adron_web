import nodemailer from "nodemailer"

export default async function ContactAPI (req, res) {
    const { name, email, phone, message, consent } = req.body;

    const user = process.env.EMAIL_USER;

    const data = { name, email, phone, message, consent };

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: user,
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html:`
            <p>Name: ${name}<p/>
            <p>Email: ${email}<p/>
            <p>Phone Number: ${phone}<p/>
            <p>Message: ${message}<p/>
            <p>Consent: ${consent}<p/>
            `,
        });

        console.log("Message sent:", mail.messageId);

        return res.status(200).json({ message: "success"}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Could not send the email. Your message was not sent." });
    }
}