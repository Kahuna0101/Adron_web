import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const {
    firstname,
    lastname,
    email,
    phone,
    estate,
    numberOfPlots,
    message,
    refName,
    refPhone,
  } = req.body;
  const subscriber = req.body.subscriber;
  const contactMethod = req.body.contactMethod;

  const user = process.env.EMAIL_USER;

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
      from: `AdronHomes 🏡 <${user}>`,
      to: user,
      replyTo: email,
      subject: `Subscription Form Submission By ${firstname} ${lastname}`,
      html: `
            <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
                <div style="max-width: 700px; background-color: white; margin: 0 auto">
                    <div style="width: 100%; background-color: green; padding: 20px 0">
                    <a href="${process.env.CLIENT_URL}">
                        <img src="https://res.cloudinary.com/daamcwt3y/image/upload/v1693341349/logo_n24gyg.jpg" alt="AdronHomes" style="width: 100%; height: 70px; object-fit: contain" />
                    </a>
                    </div>

                    <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
                        <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
                            From Adron Homes
                        </p>
                        <div style="font-size: .8rem; margin: 0 30px">
                            <p>FirstName: ${firstname}<p/>
                            <p>LastName: ${lastname}<p/>
                            <p>Email: ${email}<p/>
                            <p>Phone Number: ${phone}<p/>
                            <p>Mode of Client: ${subscriber}<p/>
                            <p>Interested Estate: ${estate}<p/>
                            <p>No of Plots: ${numberOfPlots}<p/>
                            <p>Message: ${message}<p/>
                            <p>Contact Method: ${contactMethod}<p/>
                            <p>Name Of Agent: ${refName}<p/>
                            <p>Contact of Agent: ${refPhone}<p/>
                        </div>
                    </div>
                </div>
            </div>
            `,
    });

    console.log("Message sent:", mail.messageId);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        message: "Could not send the email. Your message was not sent.",
      });
  }
}
