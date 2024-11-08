const router = require("express").Router();

module.exports = router;

const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/sendmessage", async (req, res, next) => {
  try {
    const { name, email, phone, message, location } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.TRANSPORTER_EMAIL,
        pass: process.env.TRANSPORTER_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.TRANSPORTER_EMAIL, //same as from email for now. We can change this later to someone who will take care of forwarding the message
      subject: "New Contact Form Submission",
      html: `
            <div>
        <div style="margin-top: 10px">Name: ${`${name}`}</div>
        <div style="margin-top: 10px">Location: ${location.name}</div>
        <div style="margin-top: 10px">Email: ${email}</div>
        <div style="margin-top: 10px">Phone: ${phone}</div>
        <div style="margin-top: 10px">Message: ${message}</div>
      </div>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send("success");
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
