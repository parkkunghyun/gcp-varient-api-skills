"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/cloud-image1.jpg",
  "/images/cloud-image2.jpg",
  "/images/cloud-image3.jpg",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-between px-20 bg-white overflow-hidden">
      
      <motion.div
        className="flex flex-col gap-6 max-w-xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-blue-600">Google Cloud 무료 체험!</h1>
        <p className="text-lg text-gray-600">
          다양한 구글 클라우드 내의 기능들을 체험해보며<br />
          클라우드 기능들이 얼마나 편한지 같이 알아봐요.
        </p>
        <Link href="/dashboard">
          <button className="mt-4 cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            체험하기
          </button>
        </Link>
      </motion.div>

      
      <motion.div
        className="w-1/2 flex justify-end"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        key={images[index]}
      >
        <Image
          src={images[index]}
          alt={`클라우드 이미지 ${index + 1}`}
          width={600}
          height={400}
          className="rounded-xl object-cover transition duration-1000 ease-in-out"
        />
      </motion.div>
    </div>
  );
}
