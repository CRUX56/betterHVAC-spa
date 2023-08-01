const express = require("express");
const router = express.Router();

// Route to handle hero-form data
router.post("/contact-form", (req, res) => {
  console.log("Form data recieved:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Comments:", comments);
});

module.exports = router;
