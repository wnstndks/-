import Card from "./Card";

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