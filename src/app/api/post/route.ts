import connectToDB from "@/Configs/mongodb";
import isLogin from "@/Middlewares/isLogin";
import postModel from "@/models/post";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export const POST = async (req: Request) => {
  try {

    connectToDB();
    const isLoginUser = await isLogin();
    if (!isLoginUser) return NextResponse.json({ message: "You Need Login" }, { status: 401 });
    const formData = await req.formData();

    const files = formData.getAll("photos");

    const filenames = files.map(file => {
      const f = file as File
      return `${Date.now() + Math.floor(Math.random() * 5000)}.${f.type.split("/")[1]}`
    })

    files.map(async (file, i) => {
      const photo = file as File;
      if (!photo) return NextResponse.json({ message: "Not Found Photo" }, { status: 400 });
      const fileName = filenames[i];
      const buffer = Buffer.from(await photo.arrayBuffer());
      writeFile(path.join(process.cwd(), `/public/uploads/${fileName}`), buffer);
    });

    const newPost = await postModel.create({
      userID: isLoginUser._id,
      caption: formData.get("caption"),
      photos: filenames,
      hashtags: JSON.parse(formData.get("hashtags") as string),
      location: formData.get("location"),
    });

    if (!newPost) return NextResponse.json({ message: "Error To Create Post" }, { status: 500 });

    return NextResponse.json({ message: "succes" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
