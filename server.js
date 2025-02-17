const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const pageRoute = require("./routes/pageRoute");

dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 


app.use(express.static(path.join(__dirname, "public")));

app.use(pageRoute); 


app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`.bgRed.white);
});
