const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.json({ message: "Form submitted successfully!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
