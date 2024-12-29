import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Duis at tellus at urna condimentum mattis pellentesque. Quam lacus suspendisse faucibus interdum posuere. Blandit volutpat maecenas volutpat blandit aliquam etiam erat.",
      author: "James Owusu",
      position: "MD GCB Bank",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
    {
      quote:
        "Duis at tellus at urna condimentum mattis pellentesque. Quam lacus suspendisse faucibus interdum posuere. Blandit volutpat maecenas volutpat blandit aliquam etiam erat.",
      author: "Felix Asare",
      position: "Lakeside Estate",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
    {
      quote:
        "Duis at tellus at urna condimentum mattis pellentesque. Quam lacus suspendisse faucibus interdum posuere. Blandit volutpat maecenas volutpat blandit aliquam etiam erat.",
      author: "Charles Addo",
      position: "East Legon",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-6 shadow-md flex flex-col items-center text-center"
        >
          <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
          <h4 className="font-semibold text-gray-800">
            {testimonial.author} - {testimonial.position}
          </h4>
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full mt-4"
          />
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
