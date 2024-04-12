import LoginForm from "@/Components/templates/register/RegisterForm";
import Link from "next/link";

const Login = () => {
  return (
    <div className="full-s">
      <div className="pattern"></div>
      <div className="container h-full flex justify-center items-center">
        <div className="w-96 bg-gray-800 py-2 px-4 rounded-xl flex justify-center flex-col">
          <div className="flex justify-center items-center">
            <h2 className="text-gray-300 text-lg">ساخت حساب جدید</h2>
          </div>
          <LoginForm />
          <div className="flex items-center justify-center mt-6 gap-x-1 mb-2">
            <p className="text-gray-300 text-sm">حساب کاربری داری ؟ </p>
            <Link href={"/login"} className="text-green-500 text-sm">
              وارد شو
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
