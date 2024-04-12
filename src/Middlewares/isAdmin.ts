import connectToDB from "@/Configs/mongodb";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import userModel from "@/models/user";
const isAdmin = async () => {
  try {
    connectToDB();
    const token = cookies().get("token");
    if (!token) return false;
    const verify = jwt.verify(token.value, "SKUFHKNLOEFHKJANDJGYD") as {
      phone: string;
    };
    if (!verify) return false;
    const user = await userModel.findOne({ phone: verify.phone });
    if (user.role !== "ADMIN") return false;
    return user;
  } catch (error) {
    return false;
  }
};
export default isAdmin;
