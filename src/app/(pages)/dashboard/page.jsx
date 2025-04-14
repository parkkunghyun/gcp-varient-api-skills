// app/dashboard/page.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex h-full flex-col lg:flex-row items-center gap-8 justify-center p-4">
      <Link
        href="/dashboard/chatbot"
        className="bg-white shadow-2xl rounded-2xl border-2 border-gray-100 
        p-6 w-full max-w-xs sm:max-w-sm lg:max-w-sm 
        transition-transform duration-200 ease-in-out transform hover:scale-110"
      >
        <h1 className="text-xl lg:text-2xl font-semibold text-center mb-6">
          챗봇 체험하기
        </h1>
        <div className="flex justify-center">
          <Image
            src="/images/chat-bot-image.jpg"
            alt="chatbot"
            width={140}
            height={140}
            className="lg:w-[180px] lg:h-[180px]"
          />
        </div>
      </Link>

      <Link
        href="/dashboard/translate"
        className="bg-[#0f229c] shadow-2xl rounded-2xl border-2 border-gray-100 
        p-6 w-full max-w-xs sm:max-w-sm lg:max-w-sm 
        transition-transform duration-200 ease-in-out transform hover:scale-110"
      >
        <h1 className="text-xl lg:text-2xl font-semibold text-center mb-6 text-white">
          번역 체험하기
        </h1>
        <div className="flex justify-center">
          <Image
            src="/images/translate-image.jpg"
            alt="translate"
            width={140}
            height={140}
            className="lg:w-[180px] lg:h-[180px]"
          />
        </div>
      </Link>

      <Link
        href="/dashboard/ocr"
        className="bg-[#38a0ff] shadow-2xl rounded-2xl border-2 border-gray-100 
        p-6 w-full max-w-xs sm:max-w-sm lg:max-w-sm 
        transition-transform duration-200 ease-in-out transform hover:scale-110"
      >
        <h1 className="text-xl lg:text-2xl font-semibold text-center mb-6 text-white">
          OCR 체험하기
        </h1>
        <div className="flex justify-center">
          <Image
            src="/images/ocr-image.png"
            alt="ocr"
            width={140}
            height={140}
            className="lg:w-[180px] lg:h-[180px]"
          />
        </div>
      </Link>
    </div>
  );
};

export default DashboardPage;
