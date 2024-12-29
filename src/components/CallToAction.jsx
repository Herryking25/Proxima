import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center space-y-6 px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Let us do all the work
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
          “Duis at tellus at urna condimentum mattis pellentesque. Quam lacus
          suspendisse faucibus interdum posuere. Blandit volutpat maecenas
          volutpat blandit aliquam etiam erat.”
        </p>

        {/* Contact */}
        <p className="text-lg md:text-xl font-bold text-black">
          Call us now <span className="text-blue-600">+233-384-89489</span>
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
