"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems, NavItem, topNavItems } from "../util/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [topNavDropdownOpen, setTopNavDropdownOpen] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [submenuOpen, setSubmenuOpen] = useState<{ [key: number]: number | null }>({});
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const submenuRefs = useRef<{ [key: number]: HTMLUListElement | null }>({});

  const handleTopNavMouseEnter = (index: number) => {
    setTopNavDropdownOpen(index);
    setDropdownOpen(null); // Close other dropdown
  };

  const handleTopNavMouseLeave = () => {
    setTopNavDropdownOpen(null);
  };

  const handleMouseEnter = (index: number) => {
    setDropdownOpen(index);
    setTopNavDropdownOpen(null); // Close other dropdown
  };

  const handleMouseLeave = () => {
    if (!dropdownRef.current?.matches(":hover")) {
      setDropdownOpen(null);
      setSubmenuOpen({});
    }
  };

  const handleSubmenuMouseEnter = (parentIndex: number, index: number) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [parentIndex]: index
    }));
  };

  const handleSubmenuMouseLeave = (parentIndex: number) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [parentIndex]: null
    }));
  };

  const handleMobileMenu = () => {
    setMobileNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !Object.values(submenuRefs.current).some(ref => ref?.contains(event.target as Node))
      ) {
        setDropdownOpen(null);
        setSubmenuOpen({});
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const setSubmenuRef = (index: number) => (el: HTMLUListElement | null) => {
    submenuRefs.current[index] = el;
  };

  return (
    <>
      <div className="w-full bg-white shadow-md flex items-center mb-0 md:mb-20 flex-col">
        <div className="w-full px-4">
          <div className="flex justify-end items-center py-2">
            <nav className="hidden md:flex space-x-8">
              {topNavItems.map((item: NavItem, index: number) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleTopNavMouseEnter(index)}
                  // onMouseLeave={handleTopNavMouseLeave}
                >
                  <button
                    className="text-gray-700 hover:text-yrci-red focus:outline-none text-lg font-[600]"
                    style={{ fontWeight: 800 }}
                  >
                    {item.name}
                    <FontAwesomeIcon
                      className="ml-3 text-[12px]"
                      icon={faChevronDown}
                    />
                  </button>
                  {topNavDropdownOpen === index && (
                    <ul
                      ref={dropdownRef}
                      onMouseLeave={handleTopNavMouseLeave}
                      className="absolute mt-2 w-60 bg-white shadow-lg left-[-33px] top-[36px] pl-2 pt-4 h-fit flex flex-col justify-evenly z-[9999] text-[20px] font-[600] border-t-2 border-t-yrci-red"
                    >
                      {item.links.map((link, linkIndex) => (
                        <li
                          key={linkIndex}
                          className="relative my-2 ml-2 p-2 hover:bg-light-gray hover:text-yrci-red"
                          onMouseEnter={() =>
                            link.submenu && handleSubmenuMouseEnter(index, linkIndex)
                          }
                          onMouseLeave={() => link.submenu && handleSubmenuMouseLeave(index)}
                        >
                          <Link
                            href={link.link}
                            className="capitalize transition-colors duration-300 flex items-center bold-text"
                          >
                            {link.name}
                            {link.submenu && (
                              <FontAwesomeIcon
                                className="ml-8 text-[12px]"
                                icon={faChevronLeft}
                              />
                            )}
                          </Link>
                          {submenuOpen[index] === linkIndex && link.submenu && (
                            <ul
                              ref={setSubmenuRef(index)}
                              onMouseLeave={() => handleSubmenuMouseLeave(index)}
                              className="absolute mt-0 ml-4 w-60 left-[-272px] bg-white shadow-lg top-[-26px] pl-2 h-fit flex flex-col justify-evenly z-[9999] text-[16px] font-[600] border-t-2 border-t-yrci-red"
                            >
                              {link.submenu.map((sublink, sublinkIndex) => (
                                <li
                                  key={sublinkIndex}
                                  className="my-2 ml-2 p-2 hover:bg-light-gray"
                                >
                                  <Link
                                    href={sublink.link}
                                    className="capitalize hover:bg-light-gray transition-colors duration-300"
                                  >
                                    {sublink.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="w-full px-12 md:px-4 md:border-t-2 md:border-t-black">
          <div className="flex justify-between items-center py-4">
            <Link href="https://yrci.com" className=" w-[59px] h-[38px] md:h-[82px] md:w-[123px] relative aspect-[4/3] md:ml-7">
              <Image
                src={`https://yrci.com/wp-content/uploads/YRCI_logo_rectangle.png`}
                alt="yrci-logo"
                fill={true}
                className="h-auto"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item: NavItem, index: number) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  // onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="text-gray-700 hover:text-yrci-red focus:outline-none text-lg font-[600]"
                    style={{ fontWeight: 800 }}
                  >
                    {item.name}
                    <FontAwesomeIcon
                      className="ml-3 text-[12px]"
                      icon={faChevronDown}
                    />
                  </button>
                  {dropdownOpen === index && (
                    <ul
                      ref={dropdownRef}
                      className="absolute mt-2 w-60 bg-white shadow-lg top-[54px] pl-2 pt-4 h-fit flex flex-col justify-evenly z-[9999] text-[20px] font-[600] border-t-2 border-t-yrci-red"
                      style={{ left: -140 }}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.links.map((link, linkIndex) => (
                        <li
                          key={linkIndex}
                          className="relative my-2 p-2 hover:bg-light-gray hover:text-yrci-red"
                          onMouseEnter={() =>
                            link.submenu && handleSubmenuMouseEnter(index, linkIndex)
                          }
                          onMouseLeave={() => link.submenu && handleSubmenuMouseLeave(index)}
                        >
                          <Link
                            href={link.link}
                            className="capitalize transition-colors duration-300 flex items-center"
                          >
                            {link.name}
                            {link.submenu && (
                              <FontAwesomeIcon
                                className="ml-8 text-[12px]"
                                icon={faChevronLeft}
                              />
                            )}
                          </Link>
                          {submenuOpen[index] === linkIndex && link.submenu && (
                            <ul
                              ref={setSubmenuRef(index)}
                              onMouseLeave={() => handleSubmenuMouseLeave(index)}
                              className="absolute mt-0 ml-4 w-60 left-[-256px] bg-white shadow-lg top-[-26px] pl-2 h-fit flex flex-col justify-evenly z-[9999] text-[16px] font-[600] border-t-2 border-t-yrci-red"
                            >
                              {link.submenu.map((sublink, sublinkIndex) => (
                                <li
                                  key={sublinkIndex}
                                  className="my-2 ml-2 p-2 hover:bg-light-gray"
                                >
                                  <Link
                                    href={sublink.link}
                                    className="capitalize hover:bg-light-gray transition-colors duration-300"
                                  >
                                    {sublink.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
            {/* Mobile nav */}
            <div className="flex md:hidden">
              <div>
                <FontAwesomeIcon
                  icon={mobileNavOpen ? faXmark : faBars}
                  className="text-xl"
                  onClick={handleMobileMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {mobileNavOpen && (
        <div className="block md:hidden border-2 w-11/12 mx-auto z-[9999] relative">
          <nav className="flex flex-col absolute bg-white w-full border-t-2 border-t-yrci-black shadow-lg pb-12">
            {navItems.map((item: NavItem, index: number) => (
              <div key={index} className="relative border-b-[1px] pl-5">
                <button
                  className="text-gray-700 p-[13px] focus:outline-none text-lg font-[600] flex justify-between w-full items-center"
                  style={{ fontWeight: 800 }}
                >
                  {item.name}
                  <FontAwesomeIcon
                    className="ml-3 text-[12px]"
                    icon={faChevronDown}
                    onClick={() =>
                      dropdownOpen === index
                        ? setDropdownOpen(null)
                        : setDropdownOpen(index)
                    }
                  />
                </button>
                {dropdownOpen === index && (
                  <ul
                    className="mt-2 w-full bg-[#F7F7F7] shadow-lg top-[54px] h-fit flex flex-col justify-evenly text-base font-[600] last:mb-0"
                    style={{ left: -140 }}
                  >
                    {item.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="relative my-2 p-2 pr-0 capitalize border-b-[1px] border-gray-300 last:border-b-0"
                      >
                        <div className="flex justify-between">
                          <Link
                            href={link.link}
                            className="capitalize transition-colors duration-300 flex items-center"
                          >
                            {link.name}
                          </Link>
                          {link.submenu && (
                            <FontAwesomeIcon
                              className="ml-8 text-[12px] mr-4"
                              icon={faChevronDown}
                              onClick={() =>
                                submenuOpen[index] === linkIndex
                                  ? handleSubmenuMouseLeave(index)
                                  : handleSubmenuMouseEnter(index, linkIndex)
                              }
                            />
                          )}
                        </div>
                        {submenuOpen[index] === linkIndex && link.submenu && (
                          <ul className="mt-0 w-full left-[-272px] bg-[#EFEFEF] top-[-26px] pl-2 h-fit flex flex-col justify-evenly z-[9999] text-[16px] font-[600]">
                            {link.submenu.map((sublink, sublinkIndex) => (
                              <li
                                key={sublinkIndex}
                                className="my-2 ml-2 p-2 border-b-[1px] last:border-b-0 border-gray-300"
                              >
                                <Link
                                  href={sublink.link}
                                  className="capitalize hover:bg-light-gray transition-colors duration-300"
                                >
                                  {sublink.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
