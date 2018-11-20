// Friends (DATA)
// =============================================================
var userData = [
    {
        "name": "Dollie", 
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dolley_Madison.jpg/800px-Dolley_Madison.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
    
]

//var userData = [];



var friends = [
    {
        "name":"Bob",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Bob_keeshan_captain_kangaroo_1977.JPG/800px-Bob_keeshan_captain_kangaroo_1977.JPG",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },

      {
        "name":"DJ Lance",
        "photo":"https://music.allaccess.com/wp-content/uploads/2015/08/DJ-LANCE-ROCK-solo.jpg",
        "scores":[
            2,
            1,
            3,
            4,
            4,
            1,
            3,
            5,
            2,
            1
          ]
      },

      {
          "name": "Leon",
          "photo": "https://i2.wp.com/www.weloveist.com/wp-content/uploads/leon-trotsky-as-a-young-student.jpg?ssl=1",
          "scores":[
              2,
              4,
              1,
              3,
              5,
              4,
              3,
              2,
              4,
              5
          ]

        },

            
           {
            "name":"Colonel Sanders",
            "photo":"https://www.chewboom.com/wp-content/uploads/2017/08/KFC-Brings-Back-The-Real-Colonel-Sanders-As-Brand%E2%80%99s-Newest-Celebrity-Ambassador-678x381.jpg",
            "scores":[
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
              ]
          },

          {
            "name":"Georg Festrunk",
            "photo":"http://www.nbc.com/saturday-night-live/cast/steve-martin-55971/character/georg-festrunk-15646",
            "scores":[
                1,
                2,
                3,
                4,
                5,
                4,
                3,
                2,
                1,
                1
              ]
          },

  ];

  var matches = [
      
  ];
  module.exports = matches;

  // Compare scores
  //Loop through all answers and all 'friends'.
  //You will need two 'for' loops.

  //Set up veriable for new 'friend'
  //var newFriend
  //absolute value Math(abs)
var friendScores = [];
  function compareFriends(){
  //Loop through friends
  for (i = 0; i < friends.length; i++) {
      console.log("Friend " + i + " is: " + friends[i].name);
      //Create a variable for a temporary array to store the differences between scores.
      var totalDiff = [ ];
      //loop through score arrays to compare individual scores
for (j = 0; j < 10; j++) {
    //Compare absolute values of differences.
    var diff = Math.abs(friends[i].scores[j] - userData[0].scores[j]);
    

//push diff into totalDiff array.
totalDiff.push(diff);}
//function to get the sum of the array totalDiff:
//Here's where I found the reducer function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
var reducer = (accumulator, currentValue) => accumulator + currentValue;

var friendScore = totalDiff.reduce(reducer);
console.log(friends[i].name + "'s score is:" + friendScore);
friendScores.push(friendScore);


} 
console.log(friendScores);

Array.min = function( friendScores ){
    return Math.min.apply( Math, friendScores );
};
var lowScore = Array.min(friendScores);

//Math.min.apply(null, friendScores);
//console.log(friendScores.min());
//var lowScore = friendScores.min();
console.log("The low score is: " + lowScore + ".")
function reportLowScore() {
    for (k = 0; k < friendScores.length; k++) {
        if (friendScores[k] === lowScore) {
            console.log(friends[k].name);
            matches.push(friends[k]);
            console.log("Show matches." + JSON.stringify(matches));
        }
    }   
//    $("#match-name").append("<h2>" + matches[0].name + "</h2>");
// $("#match-image").append("<img src='" + matches[0].img + "'>")

}
reportLowScore();
};
compareFriends();

  