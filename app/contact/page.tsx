import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "info for contact us",
};

const ContactPage = () => {
  return (
    <div className="w-full min-h-[550px] flex items-center justify-center text-white bg-neutral-700">
      ContactPage
    </div>
  );
};

export default ContactPage;
