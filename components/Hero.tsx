"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const path = usePathname();

  return (
    <section className="bg-white w-full dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image
          className="w-full"
          src={"/Designer.svg"}
          alt="dashboard image"
          height={20}
          width={40}
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Let's create more tools and ideas that bring us together.
          </h2>

          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Excalidraw is a virtual collaborative whiteboard tool that allows
            users to easily sketch diagrams with a hand-drawn feel.
          </p>

          <Link
            href="#"
            className="inline-flex items-center text-slate-800 font-semibold  dark:text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  rounded-lg px-5 py-2.5 text-center dark:focus:ring-primary-900 text-lg"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5 hover:transition-all "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
