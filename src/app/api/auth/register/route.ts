import connectToDB from "@/Configs/mongodb";
import codeCreator from "@/libs/codeCreator";
import preUserModel from "@/models/preUser";
import userModel from "@/models/user";
import { NextResponse } from "next/server";
import { registerSchema } from "@/Utils/Schemas";

export const POST = async (req: Request) => {
  try {
    connectToDB();
    const { username, phone } = await req.json();
    //Verify
    const isVerify = await registerSchema.isValid({ username, phone });
    if (!isVerify)
      return NextResponse.json(
        { message: "Error Validation" },
        { status: 400 }
      );

    const isExistUser = await userModel
      .findOne({ $or: [{ username }, { phone }] })
      .lean();

    if (isExistUser)
      return NextResponse.json(
        { message: "User Register Before" },
        { status: 409 }
      );
      
    const code = codeCreator(10_000, 99_999);
    const expireTime = Date.now() + 300000;

    await preUserModel.deleteMany({ phone });

    const preUser = await preUserModel.create({
      phone,
      code,
      username,
      expire: expireTime,
    });

    if (!preUser)
      return NextResponse.json(
        { message: "We Have Problem To Send Verify Code" },
        { status: 500 }
      );

    return NextResponse.json({ phone }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
