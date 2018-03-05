var path = require('path');

var friendsData = require("../data/friends.js");

// Routing

module.exports = function(app) {

    //  Friends data
    app.get('/api/friends', function(req, res){
  		res.json(friendsData);
  	});

    //  Survey results
    app.post('/app/friends', function(req, res) {

          var newFriendSum = 0;
          var currentFriendScore = 0;
          var friendObj;
          var lowestCurrentScore = 0;

          for (var i = req.body.scores.length - 1; i >= 0; i--) {
            newFriendSum += parseInt(req.body.scores[i]);
          }
          for (var j = friendsData.length - 1; j >= 0; j--) {
            console.log("j is " + j);
            var friendSum = 0;
            for (var j = friendsData[i].scores.length - 1; j >= 0; j--) {
              friendSum += friendsData[i].scores[j];
              //console.log("friendSum sum " + friendSum);
            }
            currentFriendScore = Math.abs(friendSum - newFriendSum);
            if (currentFriendScore < lowestCurrentScore) {
              lowestCurrentScore = currentFriendScore;
              friendObj = friendsData[i];

            }
          }
          res.json(friendObj);
          console.log(req.body);
          friendsData.push(req.body);
        })
      }
