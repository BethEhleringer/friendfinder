//LOAD DATA
// Link routes to a series of "data" sources.
// These data sources hold arrays of info on 'friends".
//===========

var friendsData = require("../data/friends");

//===========
// ROUTING
//============

module.exports = function(app){

  // API GET Requests
  

app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});





// Create New Friends - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newfriend = req.body;

  // Using a RegEx Pattern to remove spaces from newFriend
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  friends.push(newfriend);

  res.json(newfriend);
});

}
