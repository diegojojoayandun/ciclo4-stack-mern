const express = require("express");
const router = express.Router();

const LawyerSchema = require("../models/lawyer");

// Get a list of all lawyers
router.get("/", async (req, res) => {
  const lawyers = await LawyerSchema.find();

  res.json(lawyers);
});

// Create a new lawyer
router.post("/", async (req, res) => {
  const lawyers = new LawyerSchema(req.body);
  await lawyers.save();

  res.json(lawyers);
});

// Get lawyer By ID
router.get("/:id", async (req, res) => {
  const lawyers = await LawyerSchema.findById(req.params.id);
  res.json(lawyers);
});

// Edit lawyer
router.put("/edit/:id", (req, res, next) => {
  LawyerSchema.findByIdAndUpdate(
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

// Delete lawyer
router.delete("/delete/:id", (req, res, next) => {
  LawyerSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
