import { useState } from "react";
import { Link, NavLink } from "react-router"; // react-router ব্যবহার করা হয়েছে
import { HiMenuAlt3, HiX } from "react-icons/hi"; // আইকন ইমপোর্ট
import logo from "../assets/Logo/plant-logo.jpg"; // আপনার প্রজেক্টের লোগো পাথ
import Container from "./Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // আপনার রিকোয়ারমেন্ট অনুযায়ী ৪টি মেইন নেভ আইটেম
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* লোগো সেকশন - ইমেজ অনুযায়ী রেডি করা */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="group flex items-center gap-2">
              <img
                src={logo}
                alt="Plant Store Logo"
                className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl font-black text-[#14532d] tracking-wide hidden sm:block">
                Plant Store
              </span>
            </Link>
          </div>

          {/* ডেস্কটপ নেভ আইটেমস - মাঝখানে এলাইন করা এবং বোল্ড গ্রিন লুক */}
          <div className="hidden md:flex items-center space-x-12 mx-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-1 text-base font-extrabold tracking-wide transition-all duration-300 group ${
                    isActive
                      ? "text-[#14532d]"
                      : "text-gray-600 hover:text-[#14532d]"
                  }`
                }
              >
                {item.name}
                {/* হোভার ও অ্যাক্টিভ এনিমেশন আন্ডারলাইন (ডার্ক গ্রিন) */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#14532d] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* ডান পাশের অ্যাকশন বাটন - থিম কালার অনুযায়ী গ্রিন করা */}
          <div className="hidden md:block">
            <button className="bg-[#14532d] hover:bg-[#166534] text-white text-sm font-bold py-2.5 px-7 rounded-sm shadow-[0_4px_14px_0_rgba(20,83,45,0.25)] transition-all active:scale-95">
              Call Now
            </button>
          </div>

          {/* মোবাইল মেনু বাটন (হ্যামবার্গার) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-gray-700 focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* মোবাইল স্লাইড-ডাউন সাইডবার মেনু */}
        <div
          className={`md:hidden absolute left-0 w-full bg-white border-b shadow-md transition-all duration-300 ease-in-out ${
            isOpen
              ? "top-full opacity-100 visible"
              : "top-[120%] opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col p-6 space-y-4 text-left">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-bold py-1 transition-all ${
                    isActive
                      ? "text-[#14532d] pl-2 border-l-4 border-[#14532d]"
                      : "text-gray-700 hover:text-[#14532d]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button className="bg-[#14532d] hover:bg-[#166534] text-white py-3 rounded-sm font-bold transition-colors">
              Call Now
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
