const express = require("express");
const app = express();
const port = 3001;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/email", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});

let Email = mongoose.model(
  "Email",
  Schema(
    {
      _id: Schema.Types.ObjectId,
      id: Number,
      sender: String,
      type: String
    },
    { collection: "emails" }
  )
);

app.get("/email", (req, res) => {
  Email.find()
    .then(emails => {
      res.send(emails);
      console.log("sent");
    })
    .catch(err => res.status(400).json("Error: " + err));
});

app.get("/emails", (req, res) => {
  Email.find({ sender: req.param("sender") }).then(emails => {
    console.log(emails);
    res.send(emails);
  });
});

app.get("/inbox", (req, res) => {
  Email.find({ type: "inbox" }).then(emails => {
    res.send(emails);
  });
});

app.get("/sent", (req, res) => {
  Email.find({ type: "sent" }).then(emails => {
    res.send(emails);
  });
});

app.get("/archive", (req, res) => {
  Email.find({ type: "archive" }).then(emails => {
    res.send(emails);
  });
});

app.post("/sent", (req, res) => {
  Email.create(req.body).then(() => {
    res.send("success");
  });
});
