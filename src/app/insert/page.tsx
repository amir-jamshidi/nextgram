"use client";
import ToastPromise from "@/libs/toast";
import { AddPhotoAlternateRounded, ArrowLeftRounded } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {

  const router = useRouter();

  const [photos, setPhotos] = useState<FileList | null>(null);
  const [location, setLocation] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtag, setHashtag] = useState('');
  const [caption, setCaption] = useState("");

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotos(e.target.files);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!photos || photos.length === 0) return toast.error('لطفا تصویر پست را آپلود کنید')
    if (!caption.trim()) return toast.error('لطفا کپشن پست را وارد کنید')

    const form = new FormData();
    form.append("location", location);
    form.append("caption", caption);
    form.append("hashtags", JSON.stringify(hashtags))

    if (photos)
      Object.entries(photos).map((photo) => {
        if (photos) form.append("photos", photo[1]);
      });

    const promise = axios.post("api/post", form).then((res) => {
      if (res.status === 201) {
        router.push('/');
      } else {
        throw new Error('خطای ناشناخته')
      }
    }).catch(err => {
      throw new Error('خطای ناشناخته')
    });
    ToastPromise(promise, 'آپلود انجام شد')
  };

  const handleHashtag = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    let newHashtag = !hashtag.includes('#') ? `#${hashtag}` : hashtag
    setHashtags(preHashtags => [...preHashtags, newHashtag])
    setHashtag('');

  }

  const handleHashtagEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      let newHashtag = !hashtag.includes('#') ? `#${hashtag}` : hashtag
      setHashtags(preHashtags => [...preHashtags, newHashtag]);
      setHashtag('');
    }
  }

  return (
    <div className="full-s">
      <div className="pattern"></div>
      <div className="container h-full flex justify-center items-center px-4">
        <div className="bg-gray-800 rounded-xl p-4 w-full">
          <form onSubmit={handleForm}>
            <div className="mb-2">
              <label htmlFor="uploader">
                <input
                  multiple
                  onChange={handleImages}
                  className="hidden"
                  type="file"
                  id="uploader"
                />
                <div className="w-full h-44 bg-gray-900 flex flex-col items-center justify-center rounded-xl">
                  {photos && photos.length > 0 ? (
                    <div className="grid grid-cols-5 gap-x-1 p-2">
                      {Object.entries(photos).map((photo) => (
                        <div className="bg-gray-800 h-40 rounded-xl overflow-hidden">
                          <img
                            style={{ objectFit: "cover" }}
                            className="h-full w-full"
                            src={URL.createObjectURL(photo[1])}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <span>
                        <AddPhotoAlternateRounded
                          fontSize="large"
                          className="text-gray-200"
                        />
                      </span>
                      <p className="text-gray-400 mt-1 text-sm">
                        آپلود تصویر (حداکثر ده تصویر)
                      </p>
                    </>
                  )}
                </div>
              </label>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <div className="rounded-lg bg-gray-900 px-2">
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  autoComplete="off"
                  className="py-2 w-full bg-gray-900 outline-none border-none text-gray-200 rounded-lg"
                  placeholder="لوکیشن (اختیاری)"
                />
              </div>
              <div className="rounded-lg bg-gray-900 px-2 flex">

                <input
                  value={hashtag}
                  onChange={(e) => setHashtag(e.target.value)}
                  id="uploader"
                  type="text"
                  onKeyDown={handleHashtagEnter}
                  className="py-2 w-full bg-gray-900 outline-none border-none text-gray-200 rounded-lg"
                  placeholder="هشتگ ها (اختیاری)"
                  autoComplete="off"
                />
                <span className="bg-gray-800 cursor-pointer flex justify-center items-center w-10 rounded-md my-1.5" onClick={handleHashtag}>
                  <ArrowLeftRounded className="text-gray-200" />
                </span>
              </div>
              <div className="flex items-start gap-1 min-h-8 flex-wrap mt-1 px-2">
                {hashtags.length > 0 ? hashtags.map(hash => (
                  <span key={hash} className="bg-error font-morabba-light rounded px-1 py-0.5 text-sm text-gray-200">{hash}</span>
                )) : (
                  <div className="flex justify-center items-center w-full text-gray-500 ">هیچ هشتگی وارد نکردید !!!</div>
                )}
              </div>
            </div>
            <div className="mt-2">
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="متن پست ..."
                autoComplete="off"
                className="min-h-40 max-h-44 w-full py-1.5 px-2 bg-gray-900 rounded-lg border-none outline-none text-gray-200"
              ></textarea>
            </div>
            <input
              type="submit"
              value="پُستش کن"
              className="w-full bg-color h-10 rounded-lg text-gray-200 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
