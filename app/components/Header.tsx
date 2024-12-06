"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-32 bg-neutral-800 text-white flex items-center justify-between">
      <div className="w-3/12 flex items-center justify-center">
        <p className="font-bold text-2xl">Next.Js</p>
      </div>
      <div className="w-6/12 h-full flex items-center justify-evenly">
        <p
          className={`${
            pathname === "/" ? "bg-neutral-700" : ""
          } w-3/12 h-full flex items-center justify-center font-semibold
          text-lg
          hover:text-neutral-300
          cursor-pointer`}
        >
          <Link href={"/"}>Home</Link>
        </p>
        <p
          className={`${
            pathname === "/products" ? "bg-neutral-700" : ""
          } w-3/12 h-full flex items-center justify-center font-semibold
          text-lg
          hover:text-neutral-300
          cursor-pointer`}
        >
          <Link href={"/products"}>Products</Link>
        </p>
        <p
          className={`${
            pathname === "/about" ? "bg-neutral-700" : ""
          } w-3/12 h-full flex items-center justify-center font-semibold
          text-lg
          hover:text-neutral-300
          cursor-pointer`}
        >
          <Link href={"/about"}>About</Link>
        </p>
        <p
          className={`${
            pathname === "/contact" ? "bg-neutral-700" : ""
          } w-3/12 h-full flex items-center justify-center font-semibold
          text-lg
          hover:text-neutral-300
          cursor-pointer`}
        >
          <Link href={"/contact"}>Contact</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
