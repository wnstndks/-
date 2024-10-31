import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* 상단 메인 비주얼 */}
      <section
        className="relative w-full h-screen bg-cover bg-no-repeat flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url('/img/image.png')`, // 이미지 경로
        }}
      >
        <div className="bg-black bg-opacity-40 p-8 rounded-md">
          <h2 className="text-4xl font-bold mb-4">국내부터 해외까지</h2>
          <p className="text-2xl">여행할 때 여기어때</p>
        </div>
      </section>

      {/* 추천 숙소 섹션 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">추천 숙소</h2>
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
          <h2 className="text-3xl font-bold mb-8">인기 여행지</h2>
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

      {/* 하단 배너 섹션 */}
      <section
        className="relative w-full h-[300px] bg-cover bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/img/footer-banner.jpg')`, // 배경 이미지
        }}
      >
        <div className="bg-black bg-opacity-40 p-8 rounded-md text-center">
          <h3 className="text-2xl font-bold mb-2">여행할 때 여기어때</h3>
          <p>국내외 다양한 숙소를 지금 확인해보세요.</p>
        </div>
      </section>
    </>
  );
}
