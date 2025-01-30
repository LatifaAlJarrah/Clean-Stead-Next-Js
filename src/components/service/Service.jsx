import SharedLayout from "../SharedLayout";
import Image from "next/image";

import RoomImage from "@/assest/images/room.png";
const About = () => {
  const services = [
    { name: "غرفة النوم", image: RoomImage },
    { name: "غرفة المعيشة", image: RoomImage },
    { name: "المطبخ", image: RoomImage },
    { name: "الحمام", image: RoomImage },
  ];

  const ServiceList = ({ services }) => {
    return (
      <>
        {services.map((service, index) => (
          <div
            key={index}
            className="flex p-2 border border-custom-gray rounded-lg w-full sm:w-[48%] lg:w-[23%] h-[100px]"
          >
            <Image
              src={service.image}
              alt={service.name}
              className="rounded-lg w-1/3"
            />
            <p className="mr-2 my-auto text-sm">{service.name}</p>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <SharedLayout name={"تنظيف المنازل"}>
        <div className="my-auto">
          <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl xs:text-xl col-span-4 text-content font-light lg:h-[312px] xl:h-[312px] lg:w-[510px] xl:w-[510px]">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى .<br />
            إضافة إلى زيادة عدد الحروف التى يولدها التطبيق إذا كنت تحتاج إلى عدد
            أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،
            النص لن يبدو مقسما ولا يحوي أخطاء لغوية
          </p>
          <button className="w-32 h-10 cursor-pointer rounded-3xl btn-service">
            احجز الآن
          </button>
        </div>
      </SharedLayout>
      <div className="p-4">
        <h2 className="text-xl font-semibold  mb-4">
          الخدمات المتوفرة في تنظيف المنازل
        </h2>
        <div>
          <div className="flex flex-wrap justify-between gap-4">
            <ServiceList
              services={services}
            />
          </div>
          <div className="flex flex-wrap justify-between gap-4 mt-6">
            <ServiceList
              services={services}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
