// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <Link href="/dashboard" className="w-full h-16  bg-white px-6 flex items-center  fixed top-0 shadow-md left-0 z-10">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/letter-logo.jpg"
          alt="logo"
          width={80}
          height={80}
        />
      </motion.div>
      <h1 className="text-xl font-semibold text-gray-800 ">
        Google Cloud 기능 체험 대시보드
      </h1>
    </Link>
  );
};

export default Navbar;
