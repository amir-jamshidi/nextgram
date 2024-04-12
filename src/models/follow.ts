import mongoose from "mongoose";

const followSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    followID: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const followModel = mongoose.models.Follow || mongoose.model('Follow', followSchema);

export default followModel;