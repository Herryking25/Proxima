import React from "react";
import serve from '../assets/images/serve.png'

const ServiceSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#f0f4f8] to-[#f8e7ef] py-8">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center gap-8 px-4">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Proud to deliver excellent services all the time
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea consequat.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img
            src={serve}
            alt="Service Excellence"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
