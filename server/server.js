const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const db = require("./models");
const apiPost = require("./app/api/post");

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

apiPost(app, db);

db.sequelize.sync().then(() => {
  db.post
    .findAll({
      raw: true
    })
    .then(posts => {
      console.log(posts);
      return posts;
    });
  app.listen(8080, () => console.log("App listening on port 8080!"));
});
