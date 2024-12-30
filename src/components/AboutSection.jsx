import React from "react";
import truck from '../assets/images/truck.png'

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row my-4 justify-center  px-8 bg-gradient-to-r from-[#f0f4f8] to-[#f8e7ef]">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Welcome to Tandem
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-7">
          Ridiculus mus mauris vitae ultricies leo. Sed elementum tempus
          egestas sed sed risus pretium quam. Dignissim cras tincidunt lobortis
          feugiat. Eget gravida cum sociis natoque penatibus. Felis donec et
          odio pellentesque diam volutpat commodo sed egestas. Mattis
          pellentesque id nibh tortor. Sociis natoque penatibus et magnis dis
          parturient montes nascetur ridiculus. Pharetra pharetra massa massa
          ultricies mi quis hendrerit dolor magna. Amet cursus sit amet dictum
          sit amet justo donec enim. Rutrum quisque non tellus orci. Nisi
          tincidunt eget nullam non nisi est. Ultricies mi eget mauris pharetra
          et ultrices neque ornare. Mollis nunc sed id semper risus in
          hendrerit.
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <img
          src={truck}
          className="w-full max-w-md md:max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
