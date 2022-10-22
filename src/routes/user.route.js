const express = require("express");
const router = express.Router();

const UserSchema = require("../models/user");

// Get a list of all users
router.get("/", async (req, res) => {
  const users = await UserSchema.find();

  res.json(users);
});

// Create a new user
router.post("/", async (req, res) => {
  const users = new UserSchema(req.body);
  await users.save();

  res.json(users);
});

// Get user By ID
router.get("/:id", async (req, res) => {
  const users = await UserSchema.findById(req.params.id);
  res.json(users);
});

// Edit user
router.put("/edit/:id", (req, res, next) => {
  UserSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Student updated successfully !");
      }
    }
  );
});

// Delete user
router.delete("/delete/:id", (req, res, next) => {
  UserSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
