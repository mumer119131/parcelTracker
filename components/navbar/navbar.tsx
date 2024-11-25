import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/parcel-logo.png";
const Navbar = () => {
    const links = [
        { name: "Home", path: "/" },
        { name: "PostEx", path: "/postex" },
        { name: "Leopards", path: "/leopards" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
    ]
    return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" width={50} height={50} />
                <h1 className="text-xl font-bold">Trackify</h1>
            </Link>
            <ul className="hidden md:flex space-x-4">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path} className="text-gray-700 hover:text-gray-900">{link.name}</Link>
                    </li>
                ))}
                
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
