const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

const router = require("./network/routes");

db(
  "mongodb+srv://sebacode:LuisAlbertoSpinettaYGustavoCerati@cluster0-afkbv.mongodb.net/test?retryWrites=true&w=majority"
);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
