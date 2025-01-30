import Image from "next/image";
import Image3 from "@/assest/images/background.svg";
import Link from "next/link";
import ServiceItem from "./services/ServiceItem";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="relative w-full">
        <Image
          src={Image3}
          alt="background image"
          className="w-full h-auto rounded-xl"
        />
        <div className="main-content absolute p-4 sm:p-8 md:p-4 lg:p-6 top-4 right-4 sm:right-0 sm:top-0 md:right-0 md:top-2 xl:top-12 xl:right-8 col-span-1 lg:col-span-3">
          <h1 className="header-one sm:text-xl md:text-xl xl:text-5xl xl:font-extrabold sm:font-light md:font-medium xl:w-full lg:w-full md:w-3/4 sm:w-3/4">
          اختار يلي <span className="span-color">بيخلصك</span> من مرة واحدة !
          </h1>
          <h2 className="header-two mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-base sm:text-sm md:text-sm lg:text-2xl xl:text-2xl sm:w-3/4 md:w-3/4 xl:w-full">
            ما تشيل هم كلنا بنساعدك احجز خدمة مضمونة بكبسة زر
          </h2>
          <Link href="/contact">
            <button className="btn-contact sm:mt-5 md:mt-10 lg:mt-8 xl:mt-12 px-6 py-2 rounded-full transition duration-300 sm:w-2/4 md:2/4 xl:w-full">
              تواصل معنا
            </button>
          </Link>
        </div>
      </div>
      <ServiceItem/>
    </header>
  );
};

export default Header;