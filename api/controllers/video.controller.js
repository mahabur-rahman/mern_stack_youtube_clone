import { createError } from "../error.js";
import UserModel from "../models/User.model.js";
import VideoModel from "../models/Video.model.js";

// ADD VIDEO
export const createVideo = async (req, res, next) => {
  const newVideo = new VideoModel({ ...req.body, userId: req.user.id });

  try {
    const savedVideo = await newVideo.save();

    return res.status(201).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

// UPDATE VIDEO
export const updateVideo = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));

    if (req.user.id === video.userId) {
      const updatedVideo = await VideoModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      return res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "You can update only your video!"));
    }
  } catch (err) {
    next(err);
  }
};

// DELETE VIDEO
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);

    if (!video) return next(createError(404, "Video not found!"));

    if (req.user.id === video.userId) {
      await VideoModel.findByIdAndDelete(req.params.id);

      return res.status(200).json("The video has been deleted...");
    } else {
      return next(createError(403, "You can delete only your video!"));
    }
  } catch (err) {
    next(err);
  }
};

// GET SINGLE VIDEO
export const getSingleVideo = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);

    return res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

// INCREMENT VIEW
export const addView = async (req, res, next) => {
  try {
    await VideoModel.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });

    return res.status(200).json("The view has been increased...");
  } catch (err) {
    next(err);
  }
};

// GET TREND VIDEO

export const trendVideo = async (req, res, next) => {
  try {
    const videos = await VideoModel.find().sort({ views: -1 });

    return res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
