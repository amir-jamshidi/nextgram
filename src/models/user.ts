import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    default: `User${Math.floor(Math.random() * 50000)}`,
  },
  role: {
    type: String,
    default: "USER",
  },
}, { timestamps: true });

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
