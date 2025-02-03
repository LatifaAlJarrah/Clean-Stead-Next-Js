"use client";
import React, { useState } from "react";
import "@/app/globals.css";

import GroupTwo from "@/assest/images/group2.svg";
import Image from "next/image";

import BookingServiceSelected from "./BookingServiceSelected";
import BookingSummery from "./BookingSummery";
import BookingType from "./BookingType";
import Buttons from "./Buttons";
import BookingDate from "./BookingDate";
import UserInformation from "./UserInformation"; // Step 3: User Information

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle step transitions
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Render the current step component
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <BookingServiceSelected />;
      case 2:
        return <BookingDate />;
      case 3:
        return <UserInformation />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Header */}
      <div className="flex flex-row mt-4">
        <h3 className="h-16 xl:text-4xl sm:text-2xl xs:text-2xl text-black font-medium leading-normal">
          احجز الآن
        </h3>
        <Image
          src={GroupTwo}
          alt="Small icon"
          className="w-6 h-9 mt-1 mr-2"
          priority
        />
      </div>
      <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 rounded-t-3xl shadow-lg">
        <BookingType />
      </div>

      <div className="lg:col-start-3 lg:col-end-4">
        <BookingSummery
          service="تنظيف المنازل"
          items={["تنظيف المنازل (1)"]}
          total={55}
        />
      </div>
      {/* Main Section */}
      <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 shadow-lg">
        {renderCurrentStep()}
      </div>

      {/* Buttons for Step Navigation */}
      <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 rounded-b-3xl shadow-lg">
        <Buttons
          currentStep={currentStep}
          onClickNext={handleNextStep}
          onClickBack={handlePreviousStep}
          disabledNext={currentStep === 3}
          disabledBack={currentStep === 1}
        />
      </div>
    </div>
  );
};

export default BookingPage;
