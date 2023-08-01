// heroFormRoute.js
const express = require("express");
const router = express.Router();

// Route handler for the hero form
router.post("/", (req, res) => {
  // Handle form data here
  const formData = req.body;
  console.log("Hero Form data received:", formData);

  // Send a response back to the frontend
  res.json({ message: "Hero Form data received successfully!" });
});

module.exports = router;
