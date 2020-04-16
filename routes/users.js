const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../models/users");

const jsonParser = bodyParser.json();

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get a single user
router.get("/:id", jsonParser, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ message: "Cant find subscriber" });
    }
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// create a new user
router.post("/add-user", jsonParser, async (req, res) => {
  const user = new User({
    name: {
      firstName: req.body.name.firstName,
      lastName: req.body.name.lastName,
    },
    email: req.body.email,
    password: req.body.password,
    children: req.body.children,
  });

  try {
    const newUser = await user.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update a user
router.put("/:id", jsonParser, async (req, res) => {
  try {
    const post = await Post.updateOne(
      { _id: req.params.id },
      {
        $set: {
          desc: req.body.desc,
          lessonNum: req.body.lessonNum,
          ratings: req.body.ratings,
        },
      }
    );
    if (post === null) {
      return res.status(404).json({ message: "Cant find subscriber" });
    }
    res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//delete a user
router.delete("/delete-user/:id", jsonParser, async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    if (user === null) {
      return res.status(404).json({ message: "Cant find user" });
    }
    res.status(204).json({ message: "user deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
