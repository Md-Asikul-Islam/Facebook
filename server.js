const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');
const pageRoute = require('./routes/pageRoute');


dotenv.config();
const PORT = process.env.PORT || 3000


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use(pageRoute)

app.listen(PORT, () => {
  console.log(` The server is running on ${PORT}`.bgRed.white);
})