import React from "react";
import box from '../assets/images/box.png'
import boxes from '../assets/images/boxes.png'
import truckicon from '../assets/images/truckicon.png'
import book from '../assets/images/book.png'

const AboutMoving = () => {
  const steps = [
    {
      icon: book,
      label: "Book our service",
    },
    {
      icon: boxes,
      label: "We pack your goods",
    },
    {
      icon: truckicon,
      label: "We move your goods",
    },
    {
      icon: box,
      label: "We unpack your goods",
    },
  ];

  return (
    <section className="bg-[#F4F4F4] py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Moving made easy</h2>
        <div className="flex flex-wrap items-center  gap-4 justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-2">
              {/* Icon */}
              <img
                src={step.icon}
                alt={step.label}
                className="w-8 h-8 text-[#A9592C]"
              />
              {/* Label */}
              <p className="text-gray-800 font-medium">{step.label}</p>
              {/* Arrow */}
              {index < steps.length - 1 && (
                <span className="text-gray-500 text-xl font-bold">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMoving;
