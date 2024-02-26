"use client";
import Link from "next/link";

import ModeToggle from "@/components/theme/ModeToggle";

import Image from "next/image";

const Header = () => {
  return (
    <header
      className={
        "mx-auto flex h-[4.5rem] w-full dark:bg-gray-900 max-w-[1344px] items-center px-5 sm:px-10"
      }
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
