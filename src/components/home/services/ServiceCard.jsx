import Image from "next/image";
import "@/app/globals.css";

const ServiceCard = ({ name, image, description }) => {
  const truncateText = (text, maxLength) =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div className="p-6 rounded-3xl shadow-lg bg-white relative hover:shadow-xl card-shadow my-8">
      <div className="relative flex">
        <Image
          src={image}
          alt={`${name} thumbnail`}
          className="rounded-full xl:w-32 xl:h-32 lg:w-24 lg:h-24 -mt-20 lg:-mt-12 xl:-mt-20"
          priority
        />
        <h3 className="text-xl lg:text-xl font-extrabold w-full text-end text-custom-green">
          {name}
        </h3>
      </div>

      <div className="mt-5">
        <p className="text-xl text-custom-gray leading-relaxed h-16 font-light border-r-2 border-solid border-primary-green pr-2">
          {truncateText(description, 80)}
        </p>
        <button className="text-custom-blue font-bold cursor-pointer mt-8 lg:mt-16 xl:mt-8">
          رؤية المزيد &gt;
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
