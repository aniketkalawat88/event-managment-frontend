"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/login")

  }
  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                fill="#BEE3F8"
                d="M44,7L4,23l40,16l-7-16L44,7z M36,23H17l18-7l1,6V23z"
              />
              <path
                fill="#3182CE"
                d="M40.212,10.669l-5.044,11.529L34.817,23l0.351,0.802l5.044,11.529L9.385,23L40.212,10.669 M44,7L4,23 l40,16l-7-16L44,7L44,7z"
              ></path>
              <path
                fill="#3182CE"
                d="M36,22l-1-6l-18,7l17,7l-2-5l-8-2h12V22z M27.661,21l5.771-2.244L33.806,21H27.661z"
              ></path>
            </svg>
          </div>
          Event
        </div>
        <div className="flex mt-4 sm:mt-0">
          <Link className="px-4" href="/#features">
            Features
          </Link>
          <Link className="px-4" href="/#services">
            Services
          </Link>
          <Link className="px-4" href="/#stats">
            Stats
          </Link>
          <Link className="px-4" href="/#testimonials">
            Testimonials
          </Link>
          <Link className="px-4" href="/admin">
            Admin
          </Link>
        </div>
        <div className="hidden md:block">
          <button 
          type="submit"
          onClick={handleLogout}
            className=" py-3 px-8 text-sm bg-teal-500 hover:bg-teal-600 rounded text-white "
          >
            Logout
          </button>
          {/* <Link
            href="#allevents"
            className=" py-3 px-8 text-sm bg-teal-500 hover:bg-teal-600 rounded text-white "
          >
            View All Events
          </Link> */}
        </div>
      </div>
    </header>
  );
}
