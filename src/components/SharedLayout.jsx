import React from "react";

import image from "@/assest/images/image.png";
import GroupTwo from "@/assest/images/group2.svg";
import Image from "next/image";

import "@/app/globals.css";

const SharedLayout = ({ children, name }) => {
  return (
    <section className="grid grid-cols-12  my-6 justify-evenly">
      <div className="col-span-12 xl:col-span-6 lg:col-span-6 flex flex-col text-right mb-2 xl:order-first lg:order-first md:order-last sm:order-last xs:order-last">
        <div className="flex flex-row mt-4">
          <h3 className="h-16 xl:text-4xl sm:text-2xl xs:text-2xl text-black font-medium leading-normal">
            {name}
          </h3>
          <Image
            src={GroupTwo}
            alt="Small icon"
            className="w-6 h-9 mt-1 mr-2"
            priority
          />
        </div>
        {children}
      </div>
      <Image
        src={image}
        alt="Content"
        className="col-span-12 lg:col-span-6 xl:col-span-6 cursor-pointer lg:h-[550px] xl:h-[550px] mb-6 lg:mb-0 rounded-2xl w-full"
      />
    </section>
  );
};

export default SharedLayout;
