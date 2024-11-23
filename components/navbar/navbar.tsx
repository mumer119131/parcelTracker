import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/parcel-logo.png";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" width={50} height={50} />
                <h1 className="text-xl font-bold">Trackify</h1>
            </div>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                </li>
                <li>
                    <Link href="/postex" className="text-gray-700 hover:text-gray-900">PostEx</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
                </li>
            </ul>
            <div className="md:hidden">
                <button className="text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
  );
};

export { Navbar };
