import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <footer className="bg-white w-full dark:bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link
                    href="https://github.com/tushar-upadhya"
                    target="_blank"
                    className="hover:font-bold transition-all duration-300 dark:hover:text-[#FFA447]"
                  >
                    Github
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
                    target="_blank"
                    className="hover:font-bold transition-all duration-300 dark:hover:text-[#FFA447]"
                  >
                    LinkedIn
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    href="https://twitter.com/upadhyay0405"
                    target="_blank"
                    className="hover:font-bold transition-all duration-300 dark:hover:text-[#FFA447]"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex justify-center items-center text-black dark:text-gray-400">
          <span className="text-sm gap-4">
            &#169; Copyright |{" "}
            <Link
              href="https://tusharupadhyay.vercel.app/"
              className="hover:font-bold transition-all text-gray-500 dark:text-gray-400  duration-300 dark:hover:text-[#FFA447] "
            >
              Tushar Upadhyay
            </Link>{" "}
            | {currentMonth}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
