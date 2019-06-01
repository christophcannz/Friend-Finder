var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

app.listen(port, () => console.log("Listening on port %s", port));


