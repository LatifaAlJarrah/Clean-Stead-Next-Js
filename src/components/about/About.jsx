import React from "react";
import SharedLayout from "../SharedLayout";

const About = () => {
  return (
    <SharedLayout name={"من نحن"}>
      <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl xs:text-xl col-span-4 text-content font-light lg:h-[312px] xl:h-[312px] lg:w-[510px] xl:w-[510px]">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى .<br />
        إضافة إلى زيادة عدد الحروف التى يولدها التطبيق إذا كنت تحتاج إلى عدد
        أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،
        النص لن يبدو مقسما ولا يحوي أخطاء لغوية
      </p>
      <button className="w-32 h-10 cursor-pointer rounded-3xl btn-contact">
        تواصل معنا
      </button>
    </SharedLayout>
  );
};

export default About;
