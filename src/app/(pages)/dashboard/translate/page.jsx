"use client";

import FromCard from '../../../components/FromCard';
import { useTranslate } from '../../../hooks/useTranslate';
import React, { useEffect, useState } from 'react'
import ToCard from '../../../components/ToCard';

const TranslatePage = () => {
  const [inputText ,setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const {mutate, data, isPending, isError, error} = useTranslate();

  const handleTranslate = () => {
    if (!inputText.trim()) { 
      return;
    }
    mutate(
      { inputText: inputText, selectedLanguage: selectedLanguage },
    )
  }
  console.log(data, selectedLanguage);

  useEffect(() => {
    handleTranslate();
  }, [selectedLanguage]);

  return (
    <div className="w-full flex mt-10 flex-col items-center min-h-screen ">
      <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide mb-4 transform transition-all duration-300 hover:scale-105">
        GCP의 번역 API
      </h1>
      <p className="text-sm hidden md:block text-gray-600 mb-8 max-w-2xl text-center">
        다양한 언어로 번역해주고, TTS(TextToSpeech)를 사용해 음성으로도 변환해줍니다. <br/> 
        GCP 번역 API를 통해 더 빠르고 효율적인 번역을 경험하세요.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-10 md:gap-16 lg:flex-row lg:gap-16">
        <FromCard
          inputText={inputText} 
          setInputText={setInputText} 
          isPendingText={isPending}
          handleTranslate={handleTranslate}
        />
        <ToCard
          dataText={data}
          isPendingText={isPending}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>
    </div>
  );
}

export default TranslatePage;
