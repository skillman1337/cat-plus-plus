// components/NavBar.js
import React, { useState } from "react";
import Link from "next/link";
import { FaCat, FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-10 shadow-lg">
      <div className=" mx-auto flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="flex items-center cursor-pointer">
            <FaCat className="text-3xl mr-3 text-yellow-500" />
            <h1 className="text-lg md:text-2xl font-extrabold tracking-wide whitespace-nowrap">
              Purrfect Code, Purrfect Life
            </h1>
          </a>
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
