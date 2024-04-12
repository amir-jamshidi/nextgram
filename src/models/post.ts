import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  photos: {
    type: [String],
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  hashtags: {
    type: [String],
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  caption: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const postModel = mongoose.models.Post || mongoose.model("Post", postSchema);

export default postModel;
