// contactFormRoute.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Route handler for the contact form

router.post("/", async (req, res) => {
  // Handle contact form submission here
  const { name, email, comments } = req.body;

  try {
    // Create the Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "dathan.cruz4@gmail.com", // your email
        pass: "ipszvzedligdrtwg", // your email pass or generated app password for 2 factor authication
      },
    });

    // Define the email options
    let mailOptions = {
      from: "dathan.cruz4@gmail.com", // your-email@gmail.com
      to: "info@gmail.com", // recipient-email@example.com
      subject: "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nComments: ${comments}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.json({
      message: "Contact Form data received and email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

/* Send test data to the console
router.post("/", (req, res) => {
  // Handle form data here
  const formData = req.body;
  console.log("Contact Form data received:", formData);

  // Send a response back to the frontend
  res.json({ message: "Contact Form data received successfully!" });
});
*/
module.exports = router;
