import React from "react";
import ServiceHeader from "./ServiceHeader";
import ServiceCard from "./ServiceCard";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ClientFeedback from "./ClientFeedback";
import {
  serviceData,
  whyChooseUsList,
  serviceSection,
} from "../../../app/data/DummyData";

const ServiceItem = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      {serviceSection.map((item, index) => (
        <React.Fragment key={item.id}>
          <ServiceHeader title={item.title} />
          {index === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14">
              {serviceData.map((card) => (
                <ServiceCard
                  key={card.id}
                  name={card.name}
                  image={card.image}
                  description="ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج.."
                />
              ))}
            </div>
          )}
          {index === 1 && (
            <WhyChooseUsSection whyChooseUsList={whyChooseUsList} />
          )}
          {index === 2 && <ClientFeedback />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ServiceItem;