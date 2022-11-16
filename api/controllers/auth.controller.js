import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import UserModel from "../models/User.model.js";
import jwt from "jsonwebtoken";

// CREATE A USER
export const signUp = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new UserModel({ ...req.body, password: hash });

    await newUser.save();
    return res.status(201).json("User has been created!");
  } catch (err) {
    next(err);
  }
};

// LOGIN USER
export const login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ name: req.body.name });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "wrong credentials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { password, ...others } = user._doc;

    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};
