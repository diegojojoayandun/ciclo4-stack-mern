import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { SECRET_OR_KEY } from "../config.js";
import Role from "../models/role.js";

// GET a list of ALL users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// GET a user by ID
export const getUser = async (req, res) => {
  try {
    const {
      fullname,
      email,
      password,
      phone,
      address,
      city,
      state,
      type,
      roles,
    } = await User.findById(req.params.id);
    console.log(fullname, password, phone);
    // user.password = User.comparePassword(req.body.password, userFound.password);
    res.json({
      fullname,
      email,
      password,
      password,
      phone,
      address,
      city,
      state,
      type,
      roles,
    });
  } catch (error) {
    console.error(error);
  }
};

// ADD a user to DB
export const addUser = async (req, res) => {
  const {
    fullname,
    email,
    password,
    phone,
    address,
    city,
    state,
    type,
    roles,
  } = req.body;

  //const userFound = await User.find({ email });
  const newUser = new User({
    fullname,
    email,
    password,
    phone,
    address,
    city,
    state,
    type,
  });
  try {
    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, SECRET_OR_KEY, {
      expiresIn: 86400,
    });
    res.json({ token });
    //res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

// LOGIN
export const login = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );

  if (!userFound) return res.status(400).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ token: null, message: "Invalid Password" });
  const token = jwt.sign({ id: userFound._id }, SECRET_OR_KEY, {
    expiresIn: 86400,
  });

  res.json({ token });
};

//UPDATE user by ID info
export const editUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.json(updateUser);
  } catch (error) {
    console.error(error);
  }
};

// DELETE a user from DB
export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndRemove(req.params.id);
    res.json(deleteUser);
  } catch (error) {
    console.error(error);
  }
};
