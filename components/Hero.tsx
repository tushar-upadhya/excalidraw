"use client";

import Image from "next/image";
import Link from "next/link";

import { MoveRight } from "lucide-react";

const Hero = () => {
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

          <div className="hover:ml-4 transition-all duration-300 hover:translate-x-2">
            <Link
              href="/board"
              className="inline-flex items-center text-slate-500 font-semibold dark:text-white bg-primary-700 rounded-lg px-5 py-2.5 text-center transition-all duration-200 text-2xl hover:text-slate-800 dark:hover:text-[#FFA447]"
            >
              Ready
              <MoveRight
                size={25}
                className="ml-1 transition-all duration-300 text-3xl translate-x-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
