import React from "react";
import move from "../assets/images/move.png";

const MovingHiringServices = () => {
  return (
    <section className="relative bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${move})`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Moving & Hiring Services</h2>
        <p className="max-w-2xl text-sm md:text-base">
          Donec ac odio tempor orci dapibus ultrices in. Sit amet commodo nulla
          facilisi nullam vehicula. Tristique et egestas quis ipsum suspendisse
          ultrices gravida dictum.
        </p>
      </div>

      {/* Bottom Border */}
      <div className="h-2 bg-blue-600"></div>
    </section>
  );
};

export default MovingHiringServices;
