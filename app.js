const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./Model/User.js"); // <-- correct model path

const MONGO_URL = "mongodb://127.0.0.1:27017/UserData";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.get("/testUser", async (req, res) => {
  try {
    let sampleUser = new User({
      name: "Alice",
      email: "alice@example.com",
      role: "web developer",
      badge_level: "gold",
    });
    await sampleUser.save();
    console.log("Sample user was saved");
    res.send("Successful testing");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving user");
  }
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
