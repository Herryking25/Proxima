import React from 'react';
import apartment from '../assets/images/apartment.png';
import localshipping from '../assets/images/local_shipping.png';
import house_siding from '../assets/images/house_siding.png';

const services = [
  {
    title: "Office Relocation",
    description:
      "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
    image: apartment, // Updated to use image
  },
  {
    title: "Household Moving",
    description:
      "Sit amet est placerat in egestas erat imperdiet sed euismod. Risus nec feugiat in fermentum posuere urna nec tincidunt. Luctus accumsan tortor posuere ac ut consequat. Rhoncus aenean vel elit scelerisque mauris.",
    image: house_siding, // Updated to use image
  },
  {
    title: "Transportation services",
    description:
      "Sit amet est placerat in egestas erat imperdiet sed euismod. Risus nec feugiat in fermentum posuere urna nec tincidunt. Luctus accumsan tortor posuere ac ut consequat. Rhoncus aenean vel elit scelerisque mauris.",
    image: localshipping, // Updated to use image
  },
];

const ServiceGrid = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          We offer diverse services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-md p-6 border-t-4 border-orange-500 hover:border-orange-600 transition duration-300 w-[345px] h-[454px] mx-auto"
            >
              <div className="flex flex-col items-center justify-center space-x-4">
                <img src={service.image} alt={service.title} className="w-10 h-10" /> {/* Updated to use image */}
                <h3 className="text-[32px] font-bold text-gray-800 text-center">
                  {service.title}
                </h3>
              </div>
              <p className="text-[20px] text-gray-600 mt-4">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Repeating Grid (optional for duplication in image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {services.map((service, index) => (
            <div
              key={index + 3}
              className="bg-white shadow-lg rounded-md p-6 border-t-4 border-orange-500 hover:border-orange-600 transition duration-300 w-[345px] h-[454px] mx-auto"
            >
              <div className="flex flex-col items-center space-x-4">
                <img src={service.image} alt={service.title} className="w-10 h-10" /> {/* Updated to use image */}
                <h3 className="text-[32px] font-bold text-center text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-[20px] text-gray-600 mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;