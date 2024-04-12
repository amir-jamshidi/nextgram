"use client";

import axios from "axios";

const FollowButton = ({ followID }) => {
  const handleFollow = () => {
    axios.post("/api/follow", { followID }).then((res) => {
      console.log(res);
    });
  };

  return (
    <button
      onClick={handleFollow}
      className="bg-color text-gray-200 px-2 rounded text-sm"
    >
      دنبال کردن
    </button>
  );
};

export default FollowButton;
