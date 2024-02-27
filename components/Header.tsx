"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ModeToggle from "@/components/theme/ModeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      // cleanup the event listener
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`mx-auto flex h-[4.5rem] w-full max-w-[1344px] items-center px-5 sm:px-10 sticky top-0 z-50 ${isScrolled ? "backdrop-filter backdrop-blur-md  bg-opacity-30" : ""}`}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image src={"/favicon.ico"} alt="logo" width={60} height={60} />
      </Link>

      <div className="ml-auto flex items-center gap-3 xl:hidden ">
        <ModeToggle />
      </div>
      <div
        className={
          "absolute left-0 top-[4.375rem] z-20 hidden h-[calc(100vh-4.375rem)] w-full overflow-y-auto bg-[#E9E9E9] p-5 sm:px-10 xl:static xl:ml-20 xl:flex xl:h-auto xl:items-center xl:overflow-y-visible xl:bg-transparent xl:p-0 dark:bg-black xl:dark:bg-transparent"
        }
      >
        <div className="ml-auto flex flex-wrap items-center gap-5 xl:mt-0">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
