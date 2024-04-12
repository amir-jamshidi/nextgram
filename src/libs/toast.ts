import toast from "react-hot-toast";

const ToastPromise = (promise: Promise<void>, success: string) => {
  toast.promise(promise, {
    loading: "لطفا صبر کنید ...",
    success,
    error: (e) => `${e.message}`,
  });
};

export default ToastPromise;
