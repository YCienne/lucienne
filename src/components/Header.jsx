import React, { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const navList = [
  { id: 1, data: "Home" },
  { id: 2, data: "Tech" },
  { id: 3, data: "Skills" },
  { id: 4, data: "Experience" },
  { id: 5, data: "Projects" },
  { id: 5, data: "Contact" },
];

const Header = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed w-full flex justify-between items-center p-4 z-50 bg-transparent">
      <a href='#' className="text-3xl font-extrabold text-green-600 hover:scale-110 transition duration-300">
        GODFRED <span>.</span>
      </a>

      {/* Desktop Menu */}
<nav className="hidden md:flex">
  {navList.map((nav) => (
    <a
      key={nav.id}
      href={`#${nav.data.toLowerCase()}`}
      className="ml-8 text-lg font-medium text-white hover:text-green-600 border-b-2 border-transparent hover:border-green-500 transition-all duration-300"
    >
      {nav.data}
    </a>
  ))}
</nav>

{/* Mobile Menu Icon */}
<div className="md:hidden flex justify-end items-center relative">
  {toggle ? (
    <MdClose
      onClick={() => setToggle(false)}
      className="w-6 h-6 text-white cursor-pointer z-50"
    />
  ) : (
    <RiMenu3Fill
      onClick={() => setToggle(true)}
      className="w-6 h-6 text-white cursor-pointer"
    />
  )}

  {toggle && (
    <div className="p-4 absolute top-12 right-0 min-w-[140px] bg-gray-800 rounded-xl shadow-lg z-40">
      <ul className="list-none flex flex-col gap-4">
        {navList.map((nav) => (
          <li
            key={nav.id}
            className="font-medium cursor-pointer text-white hover:text-green-600 text-base"
            onClick={() => {
              setActive(nav.data);
              setToggle(false);
            }}
          >
            <a href={`#${nav.data.toLowerCase()}`}>{nav.data}</a>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

    </header>
  );
};

export default Header;
