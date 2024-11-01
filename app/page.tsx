import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* 상단 메인 비주얼 */}
      <section
        role="region"
        aria-label="상단 메인 비주얼"
        className="relative w-full h-[450px] overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/img/image.png')`, // 이미지 경로 설정
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "30px", // 단위 추가
            padding: "100px", // 단위 추가
            paddingLeft: "200px",
            paddingTop: "150px",
            fontWeight: "bolder",
          }}
        >
          <span>국내부터 해외까지</span>
          <br />
          <span>여행할때 여기어때</span>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">이벤트</h2>
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

      {/* 이벤트 섹션 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">국내 인기 여행지</h2>
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
