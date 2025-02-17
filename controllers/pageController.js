const showHomepage = (req, res) => {
  res.render("home");
};

const showAboutpage = (req, res) => {
  res.render("page", {
    title : " About",
    desc : " This is our About Page "
  });
};


const showContactpage = (req, res) => {
  res.render("page", {
    title : " Contact",
    desc : " This is our Contact Page "
  });
};

const showTeampage = (req, res) => {
  res.render("page", {
    title : " Team",
    desc : " This is our Team Page "
  });
};

module.exports = {
  showHomepage,
  showAboutpage,
  showContactpage,
  showTeampage
};
