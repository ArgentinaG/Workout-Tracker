const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
});