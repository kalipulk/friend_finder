module.exports= function(app) {
    var path = require("path");
    var friends = require("../data/friends")
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })
    app.post("/api/friends", function(req, res){
        // res.json(friends);
        friends.push(req.body);
    })
}