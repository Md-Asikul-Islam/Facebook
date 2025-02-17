const express = require("express");
const path = require('path')

const showHomepage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'../public/index.html'));
};

const showAboutpage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'../public/about.html'));
};

const showContactpage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'../public/contact.html'));
};

const showTeampage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'../public/team.html'));
};

module.exports = {
  showHomepage,
  showContactpage,
  showAboutpage,
  showTeampage
}