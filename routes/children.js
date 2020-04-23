const express = require("express");
const router = express.Router();
const Child = require("../models/child");

//get a single child
router.get("/children/:id", async (req, res) => {
  try {
    const child = await Child.findById(req.params.id);
    if (child === null) {
      return res.status(404).json({ message: "Cant find Child" });
    }
    res.status(200).send(child);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// create a new user
router.post("/:id/add-child", async (req, res) => {
  
  const child = new Child({
    firstName: req.body.firstName,
      birthDate: req.body.birthDate,
    gender: req.body.gender,
    
    
  });

  try {
    console.log(child);
    const newChild = await child.save();

    res.status(201).send(newChild);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update a user
router.put("/:id", async (req, res) => {
  // { 'pdfs.pdf_id': pdf_id },
  //     { $set: {
  //         'pdfs.$.title': title,
  //         'pdfs.$.description': description
  //     }
  try {
    const user = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          
            "children.$.name": req.body.children.name,
            "children.$.gender": req.body.children.gender,
            "children.$.age": req.body.children.age,
 
        },
      }
    );
    if (user === null) {
      return res.status(404).json({ message: "Cant find subscriber" });
    }
    res.status(200).send(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//delete a user
router.delete("/delete-child/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    if (user === null) {
      return res.status(404).json({ message: "Cant find user" });
    }
    res.status(204).send({ message: "user deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;

