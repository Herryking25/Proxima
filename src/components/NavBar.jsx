import { useState } from "react";
import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom"; // Change from react-scroll to react-router-dom
import Button from "./Button";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="text-black w-full px-16 flex justify-between items-center fixed z-50 bg-[#202121]">
            <h1 className="text-3xl font-bold text-white ml-4">Proxima.</h1>
            <ul className="hidden md:flex text-white">
                <li className="p-5 cursor-pointer primary-color hover:scale-125">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-5 cursor-pointer primary-color hover:scale-125">
                    <Link to="/services">Services</Link>
                </li>
                <li className="p-5 cursor-pointer primary-color hover:scale-125">
                    <Link to="/about">About</Link>
                </li>
                <li className="p-5 cursor-pointer primary-color hover:scale-125">
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
            <Button>
                Book Now
            </Button>
            <div onClick={handleNav} className="block md:hidden mr-6">
                {nav ? <AiOutlineCloseCircle size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in duration-500' : 'fixed left-[-100%] z-50'}>
                <h1 className="text-3xl primary-color m-4">Proxima.</h1>
                <ul className="p-8 text-2xl">
                    <li className="p-5"><Link to="/" onClick={() => setNav(!nav)}>Home</Link></li>
                    <li className="p-5"><Link to="/about" onClick={() => setNav(!nav)}>About</Link></li>
                    <li className="p-5"><Link to="/services" onClick={() => setNav(!nav)}>Services</Link></li>
                    <li className="p-5"><Link to="/contact" onClick={() => setNav(!nav)}>Contact</Link></li>
                </ul>
                <div className="mr-16">
                    <Button>
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;