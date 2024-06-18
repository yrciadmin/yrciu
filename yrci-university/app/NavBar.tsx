"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems, NavItem, topNavItems } from "./util/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [topNavDropdownOpen, setTopNavDropdownOpen] = useState<number | null>(
    null,
  );
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const handleTopNavMouseEnter = (index: number) => {
    setTopNavDropdownOpen(index);
  };

  const handleTopNavMouseLeave = () => {
    setTopNavDropdownOpen(null);
  };

  const handleMouseEnter = (index: number) => {
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const handleSubmenuMouseEnter = (index: number) => {
    setSubmenuOpen(index);
  };

  const handleSubmenuMouseLeave = () => {
    setSubmenuOpen(null);
  };

  const handleMobileMenu = () => {
    setMobileNavOpen((prevState) => !prevState);
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
                      onMouseEnter={() => setTopNavDropdownOpen(index)}
                      onMouseLeave={handleTopNavMouseLeave}
                      className="absolute mt-2 w-60 bg-white shadow-lg left-[-33px] top-[36px] pl-2 pt-4 h-fit flex flex-col justify-evenly z-[9999] text-[20px] font-[600] border-t-2 border-t-yrci-red"
                    >
                      {item.links.map((link, linkIndex) => (
                        <li
                          key={linkIndex}
                          className="relative my-2 ml-2 p-2 hover:bg-light-gray hover:text-yrci-red"
                          onMouseEnter={() =>
                            link.submenu && handleTopNavMouseEnter(linkIndex)
                          }
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
            <div className=" h-[68px] aspec aspec relative aspect-[4/3] shrink-0">
              <Image
                src={`https://yrci.com/wp-content/uploads/yrci-logo.png`}
                alt="yrci-logo"
                fill={true}
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item: NavItem, index: number) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
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
                      onMouseEnter={() => setDropdownOpen(index)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute mt-2 w-60 bg-white shadow-lg top-[54px] pl-2 pt-4 h-fit flex flex-col justify-evenly z-[9999] text-[20px] font-[600] border-t-2 border-t-yrci-red"
                      style={{ left: -140 }}
                    >
                      {item.links.map((link, linkIndex) => (
                        <li
                          key={linkIndex}
                          className="relative my-2 ml-2 p-2 hover:bg-light-gray hover:text-yrci-red"
                          onMouseEnter={() =>
                            link.submenu && handleSubmenuMouseEnter(linkIndex)
                          }
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
                          {submenuOpen === linkIndex && link.submenu && (
                            <ul
                              className="absolute mt-0 ml-4 w-60 left-[-272px] bg-white shadow-lg top-[-26px] pl-2 h-fit flex flex-col justify-evenly z-[9999] text-[16px] font-[600] border-t-2 border-t-yrci-red"
                              onMouseEnter={() =>
                                handleSubmenuMouseEnter(linkIndex)
                              }
                              onMouseLeave={handleSubmenuMouseLeave}
                            >
                              {link.submenu.map((sublink, sublinkIndex) => (
                                <li
                                  key={sublinkIndex}
                                  className="my-2 ml-2 p-2 hover:bg-light-gray"
                                >
                                  <Link
                                    href={sublink.link}
                                    className="capitalize  hover:bg-light-gray transition-colors duration-300"
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
                                submenuOpen === linkIndex
                                  ? setSubmenuOpen(null)
                                  : setSubmenuOpen(linkIndex)
                              }
                            />
                          )}
                        </div>
                        {submenuOpen === linkIndex && link.submenu && (
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
