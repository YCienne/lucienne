import React, { useState, useEffect } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { navList } from '../constants';

const Header = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // 60% visible
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);
    
    navList.forEach(nav => {
      const section = document.getElementById(nav.data.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => {
      navList.forEach(nav => {
        const section = document.getElementById(nav.data.toLowerCase());
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="fixed w-full flex justify-between items-center p-4 z-50 backdrop-blur-md bg-black/30 transition-shadow mb-16">
      <a href='#' className="text-3xl font-extrabold text-green-600 hover:scale-110 transition duration-300">
        GODFRED <span>.</span>
      </a>

      <nav className="hidden md:flex">
        {navList.map((nav) => (
          <a
            key={nav.id}
            href={`#${nav.data.toLowerCase()}`}
            className={`ml-8 text-lg font-medium transition-all duration-300 ${
              active === nav.data
                ? "text-green-500 border-b-2 border-green-500"
                : "text-white hover:text-green-600 border-b-2 border-transparent hover:border-green-500"
            }`}
            onClick={() => setActive(nav.data)}
          >
            {nav.data}
          </a>
        ))}
      </nav>

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
                  className={`font-medium cursor-pointer text-base transition ${
                    active === nav.data ? "text-green-500" : "text-white hover:text-green-600"
                  }`}
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
