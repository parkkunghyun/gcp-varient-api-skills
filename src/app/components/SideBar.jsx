import React from "react";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="w-64 h-[calc(100vh-80px)] bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 text-white p-6 pt-16 mt-4 ml-4 rounded-2xl fixed top-16 left-0 shadow-4xl">
      <h2 className="text-2xl font-bold mb-10">GCP 탐구하기</h2>
      <nav className="flex flex-col gap-4">
        <SidebarLink href="/dashboard/chatbot" label="🤖 Geminai 챗봇" />
        <SidebarLink href="/dashboard/translate" label="🌐 단어 → 음성 번역" />
        <SidebarLink href="/dashboard/ocr" label="🖼️ 이미지 분석 (OCR)" />
      </nav>
    </div>
  );
};

const SidebarLink = ({ href, label }) => (
  <Link
    href={href}
    className="px-3 py-2 rounded-lg hover:bg-white/10 transition duration-200 ease-in-out"
  >
    {label}
  </Link>
);

export default SideBar;
