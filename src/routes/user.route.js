import express from "express";
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
    return res.status(500).json({ message: error.message });
  }
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
