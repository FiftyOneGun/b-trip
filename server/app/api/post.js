module.exports = (app, db) => {
  app.get("/", (req, res) =>
    db.post.findAll().then(result => res.json(result))
  );
};
