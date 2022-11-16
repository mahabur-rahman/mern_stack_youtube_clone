import mongoose from "mongoose";

// CommentSchema
const CommentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    videoId: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

// VideoModel
export default mongoose.model("Comment", CommentSchema);
