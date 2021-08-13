const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config");

const app = express();

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
.then(() => console.log("succesfully connected to DB"))
.catch((e) => console.log(e));

app.get("/", (req, res) => {
    res.send("<h2>Hi There!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));


// in order to start this project RUN "docker-compose up -d --build"