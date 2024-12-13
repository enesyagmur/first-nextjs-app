import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Page",
  description: "All info about us",
};

const AboutPage = () => {
  return (
    <div className="w-full min-h-[550px] flex items-center justify-center text-white bg-neutral-700">
      About
    </div>
  );
};

export default AboutPage;
