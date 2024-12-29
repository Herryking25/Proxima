import React from "react";
import domain from "../assets/images/domain.png";
import door from "../assets/images/door.png";
import travel from "../assets/images/travel.png";
import mood from "../assets/images/mood.png";

const AboutAchievements = () => {
  const stats = [
    {
      icon: domain,
      value: "143+",
      label: "Homes moved",
    },
    {
      icon: door,
      value: "234+",
      label: "Offices moved",
    },
    {
      icon: mood,
      value: "500+",
      label: "Happy customers",
    },
    {
      icon: travel,
      value: "10,047+",
      label: "Kilometers covered",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#f0f4f8] to-[#f8e7ef] py-8">
      <div className="container mx-auto flex justify-around items-center flex-wrap gap-6 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            {/* Icon */}
            <div className="w-12 h-12">
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Value */}
            <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>

            {/* Label */}
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutAchievements;
