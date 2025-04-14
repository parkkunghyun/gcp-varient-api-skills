"use client";
import React, { useState } from "react";

const OcrPage = () => {
  const [image, setImage] = useState(null);
  const [ocrResult, setOcrResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleExampleImageClick = async (imagePath) => {
    const response = await fetch(imagePath);  // 예시 이미지 경로에서 Blob을 가져옵니다.
    const blob = await response.blob();  // Blob으로 변환
    setImage(blob);  // 파일 객체로 상태를 설정
  };

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    if (typeof image === "string") {
      formData.append("image", image); // 문자열 경로일 경우
    } else {
      formData.append("image", image); // 파일 객체일 경우
    }

    try {
      const res = await fetch("/api/ocr", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      console.log(data); // OCR 결과 출력
      setOcrResult(data.text); // OCR 결과를 상태에 저장
    } catch (error) {
      console.error("Error during OCR request:", error);
      setOcrResult("An error occurred while processing the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-gray-50 p-8">
      <div className="max-w-3xl w-full bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">OCR 분석기</h1>
        <p className="text-gray-600 text-lg mb-6">이미지를 업로드하면 Cloud Vision API를 통해 텍스트를 추출하여 보여줍니다.</p>

        {/* 이미지 업로드 및 미리 보기 */}
        <div className="flex flex-col items-center mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4 p-2 bg-blue-500 text-white rounded-md cursor-pointer"
          />
          {image && typeof image === "string" ? (
            // 예시 이미지 클릭 시
            <div className="w-64 h-64 mb-4">
              <img
                src={image}
                alt="uploaded"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ) : image && typeof image !== "string" ? (
            // 파일 이미지 클릭 시
            <div className="w-64 h-64 mb-4">
              <img
                src={URL.createObjectURL(image)}
                alt="uploaded"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ) : null}
        </div>

        <button
          onClick={handleUpload}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
          disabled={loading}
        >
          {loading ? "처리 중..." : "분석하기"}
        </button>

        {/* OCR 결과 표시 */}
        {ocrResult && (
          <div className="mt-6">
            <h2 className="font-semibold text-xl text-gray-800">OCR 결과:</h2>
            <pre className="p-4 bg-gray-100 text-sm rounded-lg shadow-md">{ocrResult}</pre>
          </div>
        )}
      </div>

      {/* 예시 이미지 섹션 */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-lg lg:ml-8 mt-8 lg:mt-0">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">예시 이미지</h2>
        <div className="space-y-4">
          <img
            src="/images/ex1.png"
            alt="Example 1"
            onClick={() => handleExampleImageClick("/images/ex1.png")}
            className="w-full h-32 object-cover rounded-lg cursor-pointer transition-all duration-200 hover:opacity-80"
          />
          <img
            src="/images/ex2.jpg"
            alt="Example 2"
            onClick={() => handleExampleImageClick("/images/ex2.jpg")}
            className="w-full h-32 object-cover rounded-lg cursor-pointer transition-all duration-200 hover:opacity-80"
          />
          <img
            src="/images/ex3.jpeg"
            alt="Example 3"
            onClick={() => handleExampleImageClick("/images/ex3.jpeg")}
            className="w-full h-32 object-cover rounded-lg cursor-pointer transition-all duration-200 hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default OcrPage;
