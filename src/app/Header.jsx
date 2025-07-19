"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <div className="border-3 sm:text-center  bg-orange-300  text-5xl  italic ">
        <IoReorderThreeOutline
          className="inline-block sm:hidden"
          onClick={() => setNav(!nav)}
        />
        <h1 className="inline-block ml-5 ">NYVARRA</h1>
      </div>
      <div
        className={
          nav
            ? "flex absolute p-4 bg-green-200  gap-10 border-3 flex-col  z-5 w-1/3"
            : " justify-center gap-10 border-3   hidden sm:flex"
        }
      >
        <Link href="/">home</Link>
        <Link href="/products">Products</Link>
        <Link href="/bodytype">body type</Link>
        <Link href="/story">Our Story</Link>
        <Link href="/about">About Us</Link>
        <Link href="/policy">policy</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/FAQs">FAQS</Link>
      </div>
    </div>
  );
}

export default Header;
