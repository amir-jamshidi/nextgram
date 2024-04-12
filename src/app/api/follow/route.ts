import connectToDB from "@/Configs/mongodb"
import isLogin from "@/Middlewares/isLogin";
import followModel from "@/models/follow";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        connectToDB();
        const isUserLogin = await isLogin();
        if (!isUserLogin) return NextResponse.json({ message: 'No Auth' }, { status: 401 });
        const { followID } = await req.json()
        const isFollowBefore = await followModel.findOne({ userID: isUserLogin._id, followID }).lean();
        console.log(isFollowBefore);
        if (isFollowBefore) return NextResponse.json({ message: 'Follow Before' }, { status: 409 })
        const follow = await followModel.create({ userID: isUserLogin._id, followID });
        if (!follow) return NextResponse.json({ message: 'Error To Add Follow' }, { status: 409 })
        return NextResponse.json({ message: 'success' });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }

}