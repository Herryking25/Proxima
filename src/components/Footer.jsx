import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#A9592C] text-white py-8 my-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Description */}
        <div>
          <h2 className="text-lg font-bold">Tandem</h2>
          <p className="mt-4 text-sm">
            When you're moving from your old house to a new location, there are thousands of
            things to be taken care of. We'll be your assistants, helping you move all your
            belongings fast wherever you wish.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" aria-label="Instagram">
            <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
            <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook">
            <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Trucking & Haulage</li>
            <li>Relocation & Logistics</li>
            <li>Car rental</li>
            <li>Courier services</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold">Contact us</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className='flex gap-2 items-center'>
            <CiLocationOn /> Liberation Road, CA
            </li>
            <li className='flex gap-2 items-center'>
            <FaPhoneAlt /> +1-234-5675-57
            </li>
            <li className='flex gap-2 items-center'>
            <FaRegEnvelope /> Info@tandem.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
