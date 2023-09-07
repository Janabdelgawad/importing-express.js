import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.get("/contact", (req, res) => {
    res.send("01010101010");
});

app.get("/about", (req, res) => {
    res.send("This is the about me section!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});