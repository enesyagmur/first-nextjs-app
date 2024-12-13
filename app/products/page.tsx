import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products Page",
  description: "All products in this page",
};

const ProductsPage = () => {
  return (
    <div className="w-full min-h-[550px] flex items-center justify-center text-white bg-neutral-700">
      Product List
    </div>
  );
};

export default ProductsPage;
