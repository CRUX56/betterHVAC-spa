// contactFormRoute.js
const express = require("express");
const router = express.Router();

// Route handler for the contact form
router.post("/", (req, res) => {
  // Handle form data here
  const formData = req.body;
  console.log("Contact Form data received:", formData);

  // Send a response back to the frontend
  res.json({ message: "Contact Form data received successfully!" });
});

module.exports = router;
