import {
  AddRounded,
  HomeRounded,
  PersonRounded,
  SearchRounded,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="h-14 flex bg-gray-800 fixed bottom-0 w-full">
      <div className="flex-1 flex justify-center items-center">
        <Link href={"/"}>
          <span>
            <HomeRounded fontSize="large" className="text-gray-300" />
          </span>
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Link href={`/search`}>
          <span>
            <SearchRounded fontSize="large" className="text-gray-300" />
          </span>
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Link href={"/insert"}>
          <span>
            <AddRounded fontSize="large" className="text-gray-300" />
          </span>
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Link href={`/me`}>
          <span>
            <PersonRounded fontSize="large" className="text-gray-300" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
