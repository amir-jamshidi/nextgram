"use client";
import {
  AlternateEmail,
  PhoneRounded,
  VerifiedRounded,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, veifySchema } from "@/Utils/Schemas";
import React, { useState } from "react";
import { handleRegisterForm, handleVerifyForm } from "@/libs/postRequests";
import { useRouter } from "next/navigation";
const RegisterForm = () => {
  const router = useRouter();

  const [isShowVerify, setIsShowVerify] = useState(false);
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const handleRegister = (values: {}) => {
    handleRegisterForm(values, (response: { phone: string }) => {
      setIsShowVerify(true);
      setPhone(response.phone);
    });
  };

  const {
    register: verifyRegister,
    handleSubmit: verifyHandleSubmit,
    formState: { errors: verifyErrors },
  } = useForm({
    resolver: yupResolver(veifySchema),
  });

  const handleVerify = (values: {}) => {
    handleVerifyForm({ ...values, phone }, (_: {}) => {
      router.push("/");
    });
  };

  return (
    <div>
      {isShowVerify ? (
        <>
          <div className="absolute flex gap-x-1">
            {Object.entries(verifyErrors).map((error) => (
              <span
                className="bg-error px-1.5 rounded-lg text-gray-200 text-sm"
                key={error[0]}
              >
                {error[1].message}
              </span>
            ))}
          </div>
          <form
            className="mt-6 flex flex-col gap-1"
            onSubmit={verifyHandleSubmit(handleVerify)}
          >
            <div className="bg-gray-900 rounded-xl flex items-center gap-x-1.5 px-2 py-1">
              <span>
                <VerifiedRounded className="text-gray-300" />
              </span>
              <span></span>
              <input
                autoComplete="off"
                className="py-1 w-full bg-gray-900 rounded-lg border-none outline-none text-gray-300"
                type="text"
                placeholder="کد تایید"
                {...verifyRegister("code")}
              />
            </div>
            <input
              type="submit"
              value="تایید کد"
              className="cursor-pointer bg-color rounded-xl h-10 text-gray-200 transition-colors"
            />
          </form>
        </>
      ) : (
        <>
          <div className="absolute flex gap-x-1">
            {Object.entries(errors).map((error) => (
              <span
                className="bg-error px-1.5 rounded-lg text-gray-200 text-sm"
                key={error[0]}
              >
                {error[1].message}
              </span>
            ))}
          </div>
          <form
            className="mt-6 flex flex-col gap-1"
            onSubmit={handleSubmit(handleRegister)}
          >
            <div className="bg-gray-900 rounded-xl flex items-center gap-x-1.5 px-2 py-1">
              <span>
                <AlternateEmail className="text-gray-300" />
              </span>
              <input
                autoComplete="off"
                className="py-1 w-full bg-gray-900 rounded-lg border-none outline-none text-gray-300"
                type="text"
                placeholder="نام کاربری شما"
                {...register("username")}
              />
            </div>
            <div className="bg-gray-900 rounded-xl flex items-center gap-x-1.5 px-2 py-1">
              <span>
                <PhoneRounded className="text-gray-300" />
              </span>
              <input
                {...register("phone")}
                autoComplete="off"
                className="py-1 w-full bg-gray-900 rounded-lg border-none outline-none text-gray-300"
                type="text"
                placeholder="شماره همراه شما"
              />
            </div>
            <input
              type="submit"
              value="ثبت نام"
              className="cursor-pointer bg-color rounded-xl h-10 text-gray-200 transition-colors"
            />
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterForm;
