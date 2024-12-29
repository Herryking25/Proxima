import React from "react";
import loads from "../assets/images/loads.png";
import star from '../assets/images/star.png'
import trophy from '../assets/images/trophy.png'
import { PiShootingStarBold } from "react-icons/pi";
import { GoTrophy } from "react-icons/go";
import { TbTargetArrow } from "react-icons/tb";


const AboutVision = () => {
  return (
    <section className="bg-gradient-to-r from-[#f0f4f8] to-[#f8e7ef] py-12 px-4">
      <div className="container mx-auto px-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image Section */}
        <div>
          <img
            src={loads}
            alt="Warehouse with stacks of goods"
            className="rounded-lg shadow-md w-[400px]"
          />
        </div>

        {/* Right Text Section */}
        <div className="space-y-8">
          {/* Vision */}
          <div className="flex items-start space-x-4">
            <img src={star} className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold text-[#A9592C]">Our Vision</h3>
              <p className="text-gray-600 mt-2">
                Viverra orci sagittis eu volutpat odio facilisis mauris sit amet.
                Quisque sagittis purus sit amet volutpat consequat mauris nunc
                congue. Aliquam vestibulum morbi blandit cursus risus at ultrices
                mi.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex items-start space-x-4">
            <img src={trophy} className="w-7 h-7" />
          {/* <GoTrophy className="w-8 h-8" /> */}
            <div>
              <h3 className="text-xl font-bold text-[#A9592C]">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                Commodo sed egestas egestas fringilla phasellus faucibus scelerisque.
                Neque vitae tempus quam pellentesque nec nam. Venenatis a condimentum
                vitae sapien pellentesque habitant morbi.
              </p>
            </div>
          </div>

          {/* Goals */}
          <div className="flex items-start space-x-4">
          <TbTargetArrow className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold text-[#A9592C]">Our Goals</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Leo duis ut diam quam nulla porttitor massa id</li>
                <li>Leo a diam sollicitudin tempor id eu nisl</li>
                <li>Id consectetur purus ut faucibus pulvinar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
