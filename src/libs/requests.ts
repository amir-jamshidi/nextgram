import connectToDB from "@/Configs/mongodb"
import isLogin from "@/Middlewares/isLogin";
import followModel from "@/models/follow";
import postModel from "@/models/post";
import userModel from "@/models/user";

export const getMainPosts = async () => {
    try {
        connectToDB();
        const posts = await postModel.find({}).populate('userID').sort({ _id: -1 }).limit(10).lean();
        if (!posts) return false;
        return posts
    } catch (error) {
        return false
    }
}

export const getMainUsers = async () => {
    try {
        connectToDB();
        const isLoginUser = await isLogin();
        const users = await userModel.find({}).sort({ _id: -1 }).limit(5).lean();
        if (!users) return false
        const finalUsers = users.filter(user => String(user._id) !== String(isLoginUser._id));
        return finalUsers
    } catch (error) {
        return false
    }
}

export const getFollowing = async () => {
    try {
        connectToDB();
        const isLoginUser = await isLogin();
        if (!isLogin) return false;
        const following = await followModel.find({ userID: isLoginUser._id }).populate('followID');
        if (!following) return false

        return following
    } catch (error) {
        return false
    }
}

export const getFollowers = async () => {
    try {
        connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const followers = await followModel.find({ followID: isLoginUser._id }).lean().populate('userID');
        if (!followers) return false;
        return followers
    } catch (error) {
        return false
    }
}

export const getMe = async () => {
    try {
        connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const [followersCount, followingCount, myPosts] = await Promise.all([await followModel.find({ followID: isLoginUser._id }).countDocuments(), await followModel.find({ userID: isLoginUser._id }).countDocuments(), await postModel.find({ userID: isLoginUser._id }).populate('userID').lean()])
        return { followersCount, followingCount, myPosts, postsCount: myPosts.length };
    } catch (error) {
        return false
    }
}