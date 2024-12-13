import React from "react";

interface Params {
  product: string;
}

const Product = ({ params }: { params: Params }) => {
  return <div>Product {params.product}</div>;
};

export default Product;
