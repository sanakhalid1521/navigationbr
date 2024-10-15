'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import ski from '../public/images/SKI.png'

export default function Navbar() {
  return (
    <header className="text-gray-400 bg-pink-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        <div className="flex items-center mr-5">
          <Image 
            src={ski}
            alt="Logo"
            width={100} 
            height={100} 
            className="text-white p-2 bg-pink-500 rounded-full"
          />
          <span className="ml-3 text-xl text-white">Sana Khalid</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="./components/home">
            <span className="mr-5 hover:text-white">Home</span>
          </Link>
          <Link href="./components/About">
            <span className="mr-5 hover:text-white">About</span>
          </Link>
          <Link href="./components/contact">
            <span className="mr-5 hover:text-white">Contact</span>
          </Link>
          <Link href="./components/help">
            <span className="hover:text-white">Help</span>
          </Link>
        </nav>

        {/* Subscribe Button */}
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Subscribe Now
          </button>
        </div>
      </div>
    </header>
  );
}
