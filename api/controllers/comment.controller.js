import VideoModel from "../models/Video.model.js";
import CommentModel from "../models/Comment.model.js";
import { createError } from "../error.js";

// ADD COMMENT
export const addComment = async (req, res, next) => {
  const newComment = new CommentModel({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();

    return res.status(201).json(savedComment);
  } catch (err) {
    next(err);
  }
};

// DELETE COMMENT
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await CommentModel.findById(req.params.id);

    const video = await VideoModel.findById(req.params.id);

    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await CommentModel.findByIdAndDelete(req.params.id);

      return res.status(200).json("The comment has bee deleted..");
    } else {
      return next(createError(403, "You can delete only your comment!"));
    }
  } catch (err) {
    next(err);
  }
};

// GET ALL COMMENTS

export const getAllComments = async (req, res, next) => {
  try {
    const comments = await CommentModel.find({ videoId: req.params.videoId });

    return res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
