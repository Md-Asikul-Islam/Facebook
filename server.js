const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const expressLayout = require('express-ejs-layouts');
const studentRoute = require('./routes/studentRoute')



// Load The environment variables 
dotenv.config();
const PORT = process.env.PORT || 4000;

// initialize express

const app = express();

// middleware for data management 

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// set up EJS as Template view engine 

app.set("view engine", "ejs");
app.use(expressLayout);
app.set("layout", "layouts/app");

// serve the static folder 

app.use(express.static('public'))


// Routing middleware 

app.use("/student",studentRoute)

// start the server 

app.listen(PORT, () => {
  console.log(` The server is running on ${PORT}`.bgRed.white)
})