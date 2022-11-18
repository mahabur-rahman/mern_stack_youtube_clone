import { createError } from "../error.js";
import UserModel from "../models/User.model.js";

// UPDATE
export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      return res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

// DELETE USER
export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await UserModel.findByIdAndDelete(req.params.id);

      return res.status(200).json("User has been deleted..");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};

// GET A USER
export const getUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// SUBSCRIBE A USER
export const subscribeUser = async (req, res, next) => {
  try {
    await UserModel.findByIdAndUpdate(req.user.id, {
      // channel id
      $push: { subscribedUsers: req.params.id },
    });

    await UserModel.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });

    return res.status(200).json("Subscription successful!");
  } catch (err) {
    next(err);
  }
};

// UNSUBSCRIBE USER
export const unSubscribeUser = async (req, res, next) => {
  try {
    await UserModel.findByIdAndUpdate(req.user.id, {
      // remove channel id
      $pull: { subscribedUsers: req.params.id },
    });

    await UserModel.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });

    return res.status(200).json("Unsubscribe successful!");
  } catch (err) {
    next(err);
  }
};
