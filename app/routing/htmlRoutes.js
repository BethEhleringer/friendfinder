//=============
//DEPENDENCIES
// Include the path package to get the correct file path for HTML

var path = require("path");

// ===============
//ROUTING
//===============

module.exports = function(app){
// HTML GET REquests
//Below code handles when users "visit" a page.


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

 /* app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });*/
};