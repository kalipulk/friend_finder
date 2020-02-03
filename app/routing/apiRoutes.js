var friends = require("../data/friends")

module.exports= function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })
    app.post("/api/friends", function(req, res){
       var totalDiff; 
       var bestMatch = {
           name: "",
           image: "",
           score: Infinity
       }
       var userData = req.body;
       var userScores = userData.score;
       for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDiff = 0;
            for (var j = 0; j < currentFriend.score.length; j++) {
                var currentFriendScore = currentFriend.score[j];
                var currentUserScore = userScores[j];
                totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore) )
            } 
            console.log(currentUserScore, currentFriendScore, currentFriend.name);
            if (totalDiff <= bestMatch.score) {
                bestMatch.name = currentFriend.name;
                bestMatch.image = currentFriend.image;
                bestMatch.score = totalDiff.score;
            } 
       }
       friends.push(userData);
       res.json(bestMatch);
    })
}