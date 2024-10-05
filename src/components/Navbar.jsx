"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [isSideMenuOpen, setSideMenu] = useState(false);

  const navLinks = [
    {
      label: "Collections",
      link: "#",
    },
    {
      label: "Men",
      link: "#",
    },
    {
      label: "About",
      link: "#",
    },
    {
      label: "Contact",
      link: "#",
    },
  ];

  return (
    <>
      <nav className="flex justify-between px-8 items-center py-6 lg:px-24 bg-orange-600">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* Menu */}
            <MdMenu
              className="text-3xl text-white cursor-pointer lg:hidden"
              onClick={() => setSideMenu(true)}
            />
            {/* Logo */}
            <Link href="/" className="text-2xl font-mono text-white">
              logo
            </Link>
          </section>

          {navLinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block text-white hover:text-black transition duration-300 ease-in-out"
              href={d.link}
            >
              {d.label}
            </Link>
          ))}
        </div>

        {/* Sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full  transition-all",
            { "translate-x-0": isSideMenuOpen }
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseSharp
              onClick={() => setSideMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            {navLinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.label}
              </Link>
            ))}
          </section>
        </div>

        <section className="flex items-center gap-4">
          {/* Cart Icon */}
          <FaCartPlus className="text-3xl text-white " />
          {/* Avatar Image */}
          <Image
            alt="User Avatar"
            width={40}
            height={40}
            className="h-8 w-8 rounded-full"
            src="https://i.pravatar.cc/150?img=52"
          />
        </section>
      </nav>
      <hr className="lg:mx-24" />
    </>
  );
}
