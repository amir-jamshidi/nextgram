import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postID: {
        type: mongoose.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    body: {
        type: String,
        required: true
    },
    isShow: {
        type: String,
        default: 1
    }
}, { timestamps: true })

const commentModel = mongoose.models.Comment || mongoose.model('Comment', commentSchema);

export default commentModel