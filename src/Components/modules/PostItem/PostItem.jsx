import React from "react";
import { FavoriteBorderRounded, LocationOnRounded } from "@mui/icons-material";

const PostItem = ({ post }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full items-center px-2">
        <div className="flex gap-x-1 items-center">
          {post.location && (
            <>
              <span>
                <LocationOnRounded className="text-gray-400" />
              </span>
              <p className="text-gray-300 text-sm">{post.location}</p>
            </>
          )}
        </div>
        <div className="flex items-center gap-x-2 text-sm">
          <p className="text-gray-200 text-sm">{post.userID.username}</p>
          <div className="rounded-full border-gary-300 p-0.5 border-2">
            <img
              src="../images/sam.jpg"
              alt=""
              className="w-9 h-9 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center flex bg-gray-900 mt-2 ">
        <img src={`../uploads/${post?.photos[0]}`} className=""></img>
      </div>
      <div className="mt-2 px-2">
        <div className="flex items-center gap-x-0.5">
          <span>
            <FavoriteBorderRounded className="text-gray-400" />
          </span>
          <span className="text-gray-400 text-sm font-dana-bold">
            {Number(post.likes) > 0 && Number(post.likes).toLocaleString()}
          </span>
        </div>
      </div>
      <div className="mt-2 px-2">
        <p className="text-gray-200 font-morabba-light text-justify">
          <span className="font-morabba0 ml-1 text-sm">
            {post.userID.username} :
          </span>
          {post.caption}
        </p>
      </div>
      <div className="flex flex-row my-2 gap-x-1 px-2 flex-wrap">
        {post.hashtags.map((hashtag) => (
          <span className="bg-color text-sm text-gray-300 rounded px-1">
            {hashtag}
          </span>
        ))}
      </div>
      <div className="flex justify-end px-2 my-1">
        <span className="text-xs text-gray-500">مشاهده همه نظر ها</span>
      </div>
      <div className="flex flex-col gap-1.5 mt-2 pt-2 border-t border-t-gray-800 px-2">
        <div className="flex items-center gap-x-2">
          <div className="w-8 h-8 rounded-full shrink-0 border border-gray-400 p-0.5">
            <img
              src="../images/sam.jpg"
              alt=""
              className="shrink-0 rounded-full"
            />
          </div>
          <div className="line-clamp-1">
            <p className="text-sm text-gray-300 font-morabba-light">
              واقعا بسیار زیبا و جذاب بود . من که خودم خیلی خیلی حال کردم و خیلی
              خوشم اومد ، امیدوارم شه هم از این ها خوشتون بیاد و لذت ببرین و
              همیشه سالم باشید
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
