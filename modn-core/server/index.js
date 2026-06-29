const express = require("express");
const cors = require("cors");

const { handleRequest } = require("./gateway/requestHandler");

const app = express();
app.use(cors());
app.use(express.json());

// MAIN DECISION API
app.post("/decide", (req, res) => {
    const result = handleRequest(req.body);
    res.json(result);
});

// STATUS CHECK
app.get("/status", (req, res) => {
    res.json({
        system: "MODN ACTIVE",
        version: "1.1.0"
    });
});

app.listen(8080, () => {
    console.log("MODN running on http://localhost:8080");
});
