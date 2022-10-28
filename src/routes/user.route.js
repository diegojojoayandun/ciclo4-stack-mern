const express = require("express");
const router = express.Router();

const UserSchema = require("../models/user");

// Get a list of all users
router.get("/", async (req, res) => {
  try {
    const users = await UserSchema.find();

    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  const users = new UserSchema(req.body);
  try {
    await users.save();

    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "FALTO UN DATO REQUERIDO" });
  }
});

// Get user By ID
router.get("/:id", async (req, res) => {
  try {
    const users = await UserSchema.findById(req.params.id);
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

// Edit user
router.put("/edit/:id", async (req, res, next) => {
  try {
    const users = await UserSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.json(users);
  } catch (error) {
    console.error(error);
  }
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
