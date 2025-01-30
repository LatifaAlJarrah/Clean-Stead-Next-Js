import React from "react";
import Image from "next/image";
import Image7 from "@/assest/images/image7.png";

const WhyChooseUsSection = ({ whyChooseUsList }) => {
  return (
    <div className="grid grid-cols-1 mt-10">
      <div className="grid grid-cols-12 gap-4 lg:gap-6 justify-between">
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={Image7}
            alt="not found"
            className="w-full h-full rounded-3xl"
          />
        </div>

        <div className="col-span-12 lg:col-span-6 space-y-8 lg:space-y-6 my-auto">
          {whyChooseUsList.map((item) => (
            <div
              className="flex flex-col lg:flex-row md:flex-row sm:flex-row xs:flex-row lg:items-center"
              key={item.id}
            >
              <div className="bg-blue-100 w-24 h-24 rounded-xl p-6">
                <Image src={item.icon} alt={`Icon ${item.name} not founded`} />
              </div>
              <div className="mx-3 my-auto">
                <p className="text-xl font-extrabold text-custom-green leading-8">
                  {item.name}
                </p>
                <p className="text-xl font-light text-custom-gray leading-8">
                  ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
