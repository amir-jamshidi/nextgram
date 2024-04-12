import { getMainUsers } from "@/libs/requests";
import React from "react";
import FollowButton from "./../../../modules/FollowButton/FollowButton";

const UsersSection = async () => {
  const users = await getMainUsers();
  return (
    <div dir="ltr" className="grid grid-cols-2 px-2">
      {users.slice(0, 4).map((user) => (
        <div className="flex items-center flex-col my-3">
          <div className="w-2/4 rounded-full">
            <img src="../images/sam.jpg" alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center mt-1">
            <p className="text-sm text-gray-300">{user.username}</p>
            <p className="text-xs text-gray-500">{user.fullname}</p>
          </div>
          <div className="mt-1">
            <FollowButton followID={JSON.parse(JSON.stringify(user._id))} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersSection;
