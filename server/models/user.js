// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const UserSchema = new Schema(
//   {
//     fullname: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true },
//     city: { type: String, required: true },
//     state: { type: String, required: true },
//     rol: { type: String },
//   },
//   {
//     collection: "User",
//     versionKey: false,
//   }
// );

// module.exports = mongoose.model("User", UserSchema);

import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    type: { type: String },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    collection: "User",
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};


export default mongoose.model("User", userSchema);
