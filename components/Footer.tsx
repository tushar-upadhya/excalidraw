import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <footer className="bg-white w-full dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow me
              </h2>

              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/tushar-upadhya"
                    target="_blank"
                    className="hover:font-bold transition-all duration-300"
                  >
                    Github
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
                    target="_blank"
                    className="hover:font-bold transition-all duration-300"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex text-black sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center dark:text-gray-400">
            {currentMonth} - {currentYear} | All Rights Reserved |{" "}
            <Link
              href="https://tusharupadhyay.vercel.app/"
              className="hover:underline transition-all duration-200"
            >
              Tushar Upadhyay
            </Link>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
              target="_blank"
              className="hover:text-black text-gray-600 dark:hover:text-white ms-5 hover:font-bold transition-all duration-300"
            >
              <TwitterLogoIcon />
            </Link>
            <Link
              href="https://github.com/tushar-upadhya"
              target="_blank"
              className="hover:text-black text-gray-600 dark:hover:text-white ms-5 hover:font-bold transition-all duration-300"
            >
              <GitHubLogoIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
