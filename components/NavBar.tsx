"use client";
import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
function NavBar() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    isSignedIn && (
      <div
        className="flex md:max-w-5xl md:mx-auto justify-between
     p-3 px-10 border-b-[1px] items-center shadow-sm bg-[#009494] text-white"
      >
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            className="rounded-full"
            alt="logo"
            width={50}
            height={50}
          />
          <p className="text-[30px] font-extrabold">Karwa GO</p>
          </div>
          
          <div className="hidden md:flex gap-6">
            <h2
              className="hover:bg-black p-2
                rounded-md cursor-pointer transition-all"
            >
              Home
            </h2>
            <h2
              className="hover:bg-black p-2
                rounded-md cursor-pointer transition-all"
            >
              History
            </h2>
            <h2
              className="hover:bg-black p-2
                rounded-md cursor-pointer transition-all"
            >
              Help
            </h2>
          </div>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    )
  );
}

export default NavBar;
