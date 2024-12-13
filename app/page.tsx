import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Main page start point",
};

export default function Home() {
  return (
    <div className="w-full min-h-[550px] flex items-center justify-center text-white bg-neutral-700">
      Home
    </div>
  );
}

// tıklanan ürünün detay sayfasına gönderme işlemindeyim
