import React from "react";

const ContactCards = () => {
  const contactInfo = [
    {
      title: "Office",
      content: (
        <>
          Proxima Logistics <br />
          P.O Box AW 5784 <br />
          Accra
        </>
      ),
    },
    {
      title: "Call us",
      content: "+233-26837494",
    },
    {
      title: "Mail us",
      content: "info@proxima.com",
    },
    {
      title: "Office hours",
      content: (
        <>
          Mon-Fri: 08:00–05:00 <br />
          Sat: 08:00–02:00
        </>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#f0f4f8] to-[#f8e7ef] py-8">
      <div className="container mx-auto flex flex-wrap justify-center gap-6 px-4">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="w-[270px] h-[150px] bg-white rounded-lg shadow-md border border-gray-200 p-4 text-center flex flex-col justify-between"
          >
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800">{info.title}</h3>

            {/* Content */}
            <p className="text-sm text-gray-600">{info.content}</p>

            {/* Bottom Border */}
            <div className="h-1 w-16 bg-[#A9592C] mx-auto"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCards;
