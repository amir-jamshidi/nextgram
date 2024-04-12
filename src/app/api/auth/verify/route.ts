import connectToDB from "@/Configs/mongodb";
import preUserModel from "@/models/preUser";
import userModel from "@/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import TokenGrerator from "@/Utils/TokenGnerator";

export const POST = async (req: Request) => {
  try {
    connectToDB();
    const { phone, code } = await req.json();
    const isVerify = (await preUserModel.findOne({ phone, code }).lean()) as {
      expire: number;
      username: string;
    };

    if (!isVerify)
      return NextResponse.json(
        { message: "Code Not Correct" },
        { status: 401 }
      );

    if (Date.now() > isVerify.expire) {
      return NextResponse.json({ message: "success" }, { status: 400 });
    }

    await userModel.create({
      phone,
      username: isVerify.username,
    });

    const token = TokenGrerator(phone);

    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      expires: Date.now() + 24 * 60 * 60 * 100 * 10,
    });

    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
