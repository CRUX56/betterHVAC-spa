const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080; //8080

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve the static Vue.js files
app.use(express.static(path.join(__dirname, "../dist")));

// Route handlers for different forms

const heroFormRoute = require("./routes/heroFormRoute");
const contactFormRoute = require("./routes/contactFormRoute");

app.use("/heroForm", heroFormRoute);
app.use("/contactForm", contactFormRoute);

// Catch-all route to redirect to the Vue.js app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
