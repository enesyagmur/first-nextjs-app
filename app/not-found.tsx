import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Not Found page",
  description: "Can not found searched page",
};

const NotFoundPage = () => {
  return (
    <div className="w-full min-h-[550px] bg-neutral-300 text-black flex items-center justify-center">
      <div className="w-6/12 p-20 flex  flex-col items-center justify-center border-2 border-neutral-800 rounded-lg">
        <p className="capitalize font-bold text-2xl">
          OOOPS! Yolumuzu kaybettik galiba
        </p>
        <p className="cursor-pointer font-semibold texl-xl mt-8">
          <Link href={"/"}>Eve dönmek için tıkla...</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
