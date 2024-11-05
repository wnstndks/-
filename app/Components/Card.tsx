// components/Card.tsx
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  price?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, price, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={250}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        {price && <p className="text-gray-600">{price}</p>}
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
