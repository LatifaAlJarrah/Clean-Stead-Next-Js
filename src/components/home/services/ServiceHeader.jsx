import Image from "next/image";
import GroupOne from "@/assest/images/group1.svg";
import GroupTwo from "@/assest/images/group2.svg";

const ServiceHeader = ({id, title}) => {
  return (
        <div
          key={id}
          className="flex justify-center items-center flex-wrap my-10"
        >
          <Image
            src={GroupOne}
            alt="Reverse icon"
            className="w-6 h-9 mt-1"
            priority
          />

          <h2 className="text-4xl font-medium mx-2 text-center text-black">
            {title}
          </h2>

          <Image
            src={GroupTwo}
            alt="Small icon"
            className="w-6 h-9 mt-1"
            priority
          />
        </div>
  );
};

export default ServiceHeader;
