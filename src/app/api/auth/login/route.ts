import connectToDB from "@/Configs/mongodb";
import codeCreator from "@/libs/codeCreator";
import preUserModel from "@/models/preUser";
import userModel from "@/models/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    connectToDB();
    const { phone } = await req.json();
    const isRegisterUser = (await userModel.findOne({ phone }).lean()) as {
      username: string;
    };
    if (!isRegisterUser)
      return NextResponse.json({ message: "No Register" }, { status: 401 });
    const code = codeCreator(10_000, 99_999);
    await preUserModel.deleteMany({ phone });
    const preUser = await preUserModel.create({
      phone,
      username: isRegisterUser.username,
      expire: Date.now() + 300000,
      code,
    });
    if (!preUser)
      return NextResponse.json(
        { message: "Error To Create PreUser" },
        { status: 500 }
      );
    return NextResponse.json({ phone }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
