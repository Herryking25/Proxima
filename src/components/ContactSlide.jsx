import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import about from '../assets/images/about.png'
import move from '../assets/images/move.png'
import black from '../assets/images/black.jpeg'

const ContactSlide = () => {
  const images = [
    about,
    black,
    move,
  ];

  return (
    <div className="relative h-[511px] w-full">
      {/* Carousel for background images */}
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        stopOnHover={false}
        className="absolute h-full w-full"
      >
        {images.map((image, index) => (
          <div key={index} className="h-[511px] w-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
        <h1 className="text-white text-4xl font-bold">Contact Us.</h1>
      </div>
    </div>
  );
};

export default ContactSlide;
