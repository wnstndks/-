'use client'

import Image from "next/image";
import Card from "./Components/Card";
import { useState } from "react";
import { FaSearch, FaUser, FaCalendarAlt } from "react-icons/fa";


export default function Home() {
  const [accommodationType, setAccommodationType] = useState("국내숙소");

  return (
    <>
       <section
      role="region"
      aria-label="숙소 검색"
      className="relative flex flex-col items-center w-full h-[450px] overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/img/image.png')`, // 이미지 경로 설정
      }}
    >
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

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">이벤트</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 카드 컴포넌트 */}
          <Card
            imageSrc="/img/hotel-1.jpg"
            title="호텔 이름"
            price="₩120,000 / 1박"
          />
        </div>
      </section>

      {/* 이벤트 섹션 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">국내 인기 여행지</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 카드 컴포넌트 */}
          <Card
            imageSrc="/img/hotel-1.jpg"
            title="호텔 이름"
            price="₩120,000 / 1박"
          />
        </div>
      </section>

      {/* 인기 여행지 섹션 */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">해외 인기 여행지</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="/img/destination-1.jpg" // 예시 이미지
                alt="여행지 1"
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">서울</h3>
                <p className="text-gray-600">핫한 장소들을 둘러보세요.</p>
              </div>
            </div>
            {/* 추가적인 여행지 카드 */}
          </div>
        </div>
      </section>

      {/* 추천 숙소 섹션 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">인기 추천 숙소</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 카드 컴포넌트 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/img/hotel-1.jpg" // 예시 이미지
              alt="추천 숙소 1"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">호텔 이름</h3>
              <p className="text-gray-600">₩120,000 / 1박</p>
            </div>
          </div>
          {/* 추가 카드 */}
        </div>
      </section>

      {/* 인기 여행지 섹션 */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">오늘 체크인 호텔 특가</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="/img/destination-1.jpg" // 예시 이미지
                alt="여행지 1"
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">서울</h3>
                <p className="text-gray-600">핫한 장소들을 둘러보세요.</p>
              </div>
            </div>
            {/* 추가적인 여행지 카드 */}
          </div>
        </div>
      </section>

      {/* 추천 숙소 섹션 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">이번주 HOT 인기 펜션</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 카드 컴포넌트 */}
          <Card
            imageSrc="/img/hotel-1.jpg"
            title="호텔 이름"
            price="₩120,000 / 1박"
          />

          {/* 추가 카드 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/img/hotel-2.jpg" // 두 번째 예시 이미지
              alt="추천 숙소 2"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">호텔 이름</h3>
              <p className="text-gray-600">₩140,000 / 1박</p>
            </div>
          </div>

          {/* 추가 카드 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/img/hotel-3.jpg" // 세 번째 예시 이미지
              alt="추천 숙소 3"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">호텔 이름</h3>
              <p className="text-gray-600">₩130,000 / 1박</p>
            </div>
          </div>

          {/* 추가 카드 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/img/hotel-4.jpg" // 네 번째 예시 이미지
              alt="추천 숙소 4"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">호텔 이름</h3>
              <p className="text-gray-600">₩150,000 / 1박</p>
            </div>
          </div>
        </div>
      </section>

      {/* 추천 숙소 섹션 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">이번주 블랙 PICK</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 카드 컴포넌트 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/img/hotel-1.jpg" // 예시 이미지
              alt="추천 숙소 1"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">호텔 이름</h3>
              <p className="text-gray-600">₩120,000 / 1박</p>
            </div>
          </div>
          {/* 추가 카드 */}
        </div>
      </section>
    </>
  );
}
