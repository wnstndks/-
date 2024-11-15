'use client'

import { useState } from "react";
import { FaSearch, FaUser, FaCalendarAlt } from "react-icons/fa";


export default function Home() {
  const [accommodationType, setAccommodationType] = useState("국내숙소");

  return (
    <div>
       <section
      role="region"
      aria-label="숙소 검색"
      className="relative flex flex-col items w-full h-[450px] overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/img/image.png')`, // 이미지 경로 설정
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "30px",
          fontWeight: "bolder",
        }}
      >
        <span>국내부터 해외까지</span>
        <br />
        <span>여행할 때 여기어때</span>
      </div>

      <div className="flex flex-col items-center bg-white bg-opacity-90 rounded-lg p-6 mt-32 w-3/4 max-w-4xl shadow-lg">
        {/* Tab 버튼 섹션 */}
        <div className="flex justify-center space-x-8">
          <button
            className={`pb-2 ${
              accommodationType === "국내숙소"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setAccommodationType("국내숙소")}
          >
            국내 숙소
          </button>
          <button
            className={`pb-2 ${
              accommodationType === "해외숙소"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setAccommodationType("해외숙소")}
          >
            해외 숙소
          </button>
        </div>

        {/* 검색, 날짜, 인원, 검색 버튼 */}
        <div className="flex mt-4 w-full">
          {/* 검색 입력 필드 */}
          <div className="flex items-center w-1/3 bg-gray-100 rounded-l-lg px-4 py-2">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="여행지나 숙소를 검색해보세요."
              className="bg-transparent outline-none w-full text-gray-700"
            />
          </div>

          {/* 날짜 필드 */}
          <div className="flex items-center w-1/4 bg-gray-100 px-4 py-2">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <span className="text-gray-700">11.05 화 - 11.06 수 (1박)</span>
          </div>

          {/* 인원 필드 */}
          <div className="flex items-center w-1/4 bg-gray-100 px-4 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <span className="text-gray-700">인원 2</span>
          </div>

          {/* 검색 버튼 */}
          <button className="w-1/6 bg-blue-600 text-white rounded-r-lg px-6 py-2 font-semibold">
            검색
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
