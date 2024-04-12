import LoginForm from "@/Components/templates/login/LoginForm";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="full-s">
      <div className="pattern"></div>
      <div className="container h-full flex justify-center items-center">
        <div className="w-96 bg-gray-800 py-2 px-4 rounded-xl flex justify-center flex-col">
          <div className="flex justify-center items-center">
            <h2 className="text-gray-300 text-lg">ورود به حساب</h2>
          </div>
          <LoginForm />
          <div className="flex items-center justify-center mt-6 gap-x-1 mb-2">
            <p className="text-gray-300 text-sm">حساب کاربری نداری ؟ </p>
            <Link href={"/register"} className="text-green-500 text-sm">
              ثبت نام کن
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
