const express = require("express");
const app = express();
const port = 4000;
const path = require("path");



// Response
app.get("/", (req, res) => {
  res.send("Welcome to the main page!");
});

// Json
app.get("/contact", (req, res) => {
  res.json({
    message: "Hier ist die Kontaktseite",
    email: "info@example.com",
    phone: "+49 123 456 789",
  });
});

// Html
app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "service.html"));
});

// Finito
app.get("/about", (req, res) => {
  res.end("Finito");
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft unter: http://localhost:${port}`);
});
