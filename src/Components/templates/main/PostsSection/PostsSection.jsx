import React from "react";
import PostItem from "./../../../modules/PostItem/PostItem";
import { getMainPosts } from "@/libs/requests";
import { cookies } from "next/headers";

const PostsSection = async () => {
  const posts = await getMainPosts();

  return (
    <div className="flex-1 flex flex-col gap-y-5 bg-gray-900 rounded-xl py-4">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostsSection;
