const mongoose = require("mongoose");
const { Schema } = mongoose;

const LawyerSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  professionalId: { type: Number, required: true },
});

module.exports = mongoose.model("Lawyer", LawyerSchema);
