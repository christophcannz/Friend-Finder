var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends.js", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends.js", function (req, res) {
        var totalDifference = 0;
        var closeMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userName);
        console.log("User score " + userScore);

        var sum = b.reduce((a, b) => a + b, 0);
        console.log("Total user score " + sum);
        console.log("Best match friend diff " + closeMatch.friendDifference);
        console.log("+++++++++++++=================");

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total Diff " + totalDifference);
            console.log("Best match friend diff " + closeMatch.friendDifference);

            var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("----------------------> " + totalDifference);

            if(totalDifference <= closeMatch.friendDifference) {
                closeMatch.name = friends[i].name;
                closeMatch.photo = friends[i].photo;
                closeMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + "Total Difference");
        }

        console.log(closeMatch);
        friends.push(userData);
        console.log("new user added");
        console.log(userData);
        res.json(closeMatch);

    });
};