import mongoose from "mongoose";

// UserSchema
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String },
    subscribers: { type: Number, default: 0 },
    subscribedUsers: { type: [String] },
    fromGoogle: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// UserModel
export default mongoose.model("User", UserSchema);
