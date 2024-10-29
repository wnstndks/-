import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="bg-white py-12 px-4 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Column */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">고객센터</h2>
          <div className="mb-4">
            <p className="text-gray-600">고객행복센터(전화): 오전 9시 ~ 새벽 3시 운영</p>
            <p className="text-gray-600">카카오톡 문의: 24시간 운영</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.11 17.173a2.78 2.78 0 003.305-.52c.133-.138.058-.059.598-.604.51-.51.786-1.658-.025-2.514-.401-.422-.633-.64-1.152-1.162-.549-.579-1.88-1.022-2.956-.028-.543.55-1.35.542-1.884.131-.489-.363-1.333-1.025-1.983-1.704a14.636 14.636 0 01-1.535-1.848c-.272-.43-.488-1.096.189-1.824.49-.456 1.037-1.838-.037-2.942-.29-.279-.596-.598-1.12-1.122-.439-.47-1.626-.923-2.611 0-.317.328-.724.642-.98 1.1-.302.423-.699 1.541-.132 2.65.709 1.308 1.795 3.454 4.454 6.127 1.529 1.58 4.07 3.377 5.87 4.26z" />
              </svg>
              1670-6250
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3c4.514 0 8 2.708 8 6.004 0 3.758-4.045 6.184-8 5.893-1.321-.094-1.707-.171-2.101-.23C6.474 15.48 5.17 17.01 4.667 17c-.325-.19.811-2.896.533-3.114-.347-.244-3.157-1.329-3.2-4.958C2 5.73 5.486 3 10 3z" />
              </svg>
              카카오 문의
            </button>
          </div>
        </div>

        {/* Right Column - Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* 회사 섹션 */}
          <div>
            <h3 className="font-bold mb-4">회사</h3>
            <div className="flex flex-col gap-2">
              <Link href="https://gccompany.co.kr" target="_blank" className="text-gray-600 hover:text-gray-900">
                회사소개
              </Link>
            </div>
          </div>

          {/* 서비스 섹션 */}
          <div>
            <h3 className="font-bold mb-4">서비스</h3>
            <div className="flex flex-col gap-2">
              <Link href="/notice" className="text-gray-600 hover:text-gray-900">
                공지사항
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                자주 묻는 질문
              </Link>
              <Link href="https://business.yeogi.com" target="_blank" className="text-gray-600 hover:text-gray-900">
                기업 출장/복지 서비스 문의
              </Link>
            </div>
          </div>

          {/* 혜택 섹션 */}
          <div>
            <h3 className="font-bold mb-4">혜택</h3>
            <div className="flex flex-col gap-2">
              <Link href="/benefit/elite" className="text-gray-600 hover:text-gray-900">
                엘리트 멤버십
              </Link>
              <Link href="/benefit/trip-holic" className="text-gray-600 hover:text-gray-900">
                트립홀릭 혜택 안내
              </Link>
              <Link href="http://q.egiftcard.kr/couponstatus/auth" target="_blank" className="text-gray-600 hover:text-gray-900">
                여기어때 상품권 조회
              </Link>
            </div>
          </div>

          {/* 모든 여행 섹션 */}
          <div>
            <h3 className="font-bold mb-4">모든 여행</h3>
            <div className="flex flex-col gap-2">
              <Link href="/?activeSearch=domestic" className="text-gray-600 hover:text-gray-900">
                국내숙소
              </Link>
              <Link href="/?activeSearch=overseas" className="text-gray-600 hover:text-gray-900">
                해외숙소
              </Link>
              <Link href="/flight" className="text-gray-600 hover:text-gray-900">
                항공
              </Link>
              <Link href="/air-hotel" className="text-gray-600 hover:text-gray-900">
                항공+숙소
              </Link>
              <Link href="/leisure-ticket" className="text-gray-600 hover:text-gray-900">
                레저·티켓
              </Link>
              <Link href="/car-rental" className="text-gray-600 hover:text-gray-900">
                렌터카
              </Link>
              <Link href="/space-rental" className="text-gray-600 hover:text-gray-900">
                공간대여
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
