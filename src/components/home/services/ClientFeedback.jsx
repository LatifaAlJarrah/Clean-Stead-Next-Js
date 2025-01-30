import React from "react";

import personOne from "@/assest/images/personOne.png";
import personTwo from "@/assest/images/personTwo.png";
import personThree from "@/assest/images/personThree.png";
import iconDown from "@/assest/images/iconDown.png";
import iconTop from "@/assest/images/iconTop.png";
import Image from "next/image";
import "@/app/globals.css";

const Person = ({ person, index }) => {
  return (
    <div
      className="col-span-12 xl:col-span-4 lg:col-span-4 ms:col-span-3 p-3 md:my-14 sm:my-14 xs:my-14 rounded-3xl relative xl:h-72 2 lg:h-72 sm:h-48 xs:h-56 xl:w-80 lg:w-64 md:w-80 sm:w-80 xs:w-80 card-shadow"
      key={index}
    >
      <Image
        src={iconTop}
        alt="not found"
        className="absolute -top-4 -right-1"
      />
      <Image
        src={person.person}
        alt="not found"
        className="absolute right-auto start-1/4 bottom-3/4"
      />
      <Image
        src={iconDown}
        alt="not found"
        className="absolute -bottom-4 -left-1"
      />
      <div className="text-center">
        <p className="absolute top-1/3 xl:right-5 lg:right-0 xl:w-64 lg:w-56 h-16 text-xl font-light">
          ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
        </p>
        <p className="absolute top-3/4 right-1/3 font-medium leading-6 person-name">
          محمد أحمد
        </p>
      </div>
    </div>
  );
};

const ClientFeedback = () => {
  const persons = [
    { person: personThree },
    { person: personTwo },
    { person: personOne },
  ];

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-12 xl:gap-28 lg:gap-x-5 justify-between xl:mx-auto sm:mx-auto xs:mx-auto">
        {persons.map((person, index) => (
          <Person person={person} key={index} />
        ))}
      </div>
    </div>
  );
};
export default ClientFeedback;
