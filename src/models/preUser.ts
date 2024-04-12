import mongoose from "mongoose";

const preUserSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  times: {
    type: Number,
    default: 0,
  },
  expire: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const preUserModel =
  mongoose.models.PreUser || mongoose.model("PreUser", preUserSchema);

export default preUserModel;
