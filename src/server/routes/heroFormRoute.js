// heroFormRoute.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
// Route handler for the hero form

router.post("/", async (req, res) => {
  // Handle Hero form submission here
  const { name, email } = req.body;

  try {
    // Create Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "dathan.cruz4@gmail.com", // your email address
        pass: "ipszvzedligdrtwg", // your email pass,
      },
    });

    // Define the email option
    let mailOptions = {
      from: "dathan.cruz4@gmail.com", // your-email@gmail.com
      to: "info@gmail.com", // recipient-email@example.com
      subject: "Free HVAC Quote Submission",
      text: `Name: ${name}\nEmail: ${email}`,
    };

    // Send the email

    await transporter.sendMail(mailOptions);

    res.json({
      message: "Free HVAC Quote data received and email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

/* Example to post to console
router.post("/", (req, res) => {
  // Handle form data here
  const formData = req.body;
  console.log("Hero Form data received:", formData);

  // Send a response back to the frontend
  res.json({ message: "Hero Form data received successfully!" });
});*/

module.exports = router;
