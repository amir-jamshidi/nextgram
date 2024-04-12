import axios from "axios";
import ToastPromise from "./toast";
export const handleRegisterForm = (values: {}, callback: Function) => {
  const promise = axios
    .post("/api/auth/register", values)
    .then((response) => {
      if (response.status === 201) {
        callback(response.data);
      } else {
        throw new Error("خطای ناشناخته");
      }
    })
    .catch((error) => {
      if (error?.response?.status === 409) {
        throw new Error("نام کاربری یا شماره از قبل وجود داره");
      }
      throw new Error("خطای ناشناخته");
    });

  ToastPromise(promise, "کد تایید برای شما ارسال شد");
};
export const handleVerifyForm = (values: {}, callback: Function) => {
  const promise = axios
    .post("/api/auth/verify", values)
    .then((response) => {
      if (response.status === 201) {
        callback(response.data);
      } else {
        throw new Error("خطای ناشناخته");
      }
    })
    .catch((error) => {
      if (error?.response?.status === 401) {
        throw new Error("کد وارد شده اشتباهه");
      }
      if (error?.response?.status === 400) {
        throw new Error("کد وارد شده منقضی شده");
      }
      throw new Error("خطای ناشناخته");
    });

  ToastPromise(promise, "ثبت نام انجام شد");
};
export const handleLoginForm = (values: {}, callback: Function) => {
  const promise = axios
    .post("/api/auth/login", values)
    .then((response) => {
      if (response.status === 201) {
        callback(response.data);
      } else {
        throw new Error("خطای ناشناخته");
      }
    })
    .catch((error) => {
      if (error?.response?.status === 401) {
        throw new Error("تا الان با این شماره ثبت نام نکردی");
      }
      throw new Error("خطای ناشناخته");
    });

  ToastPromise(promise, "ورود موفق");
};
