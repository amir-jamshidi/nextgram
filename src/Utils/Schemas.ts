import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string()
    .required("لطفا نام کاربری رو وارد کن")
    .min(4, "نام کاربری باید حداقل چهار کاراکتر باشه")
    .max(32, "نام کاربری باید حداکثر سی و دو کارکتر باشه"),
  phone: Yup.string()
    .required("لطفا شماره همراه رو وارد کن")
    .min(11, "شماره همراه باید یازده رقم باشه")
    .max(11, "شماره همراه باید یازده رقم باشه"),
});

export const veifySchema = Yup.object({
  code: Yup.string()
    .required("لطفا کد تایید رو وارد کن")
    .min(5, "کد تایید باید پنج رقم باشه")
    .max(5, "کد تایید باید پنج رقم باشه"),
});
export const loginSchema = Yup.object({
  phone: Yup.string()
    .required("لطفا شماره همراه رو وارد کن")
    .min(11, "شماره همراه باید یازده رقم باشه")
    .max(11, "شماره همراه باید یازده رقم باشه"),
});
