import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { IoReorderThree, IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { FiPhone } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
const plusChakarthaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  preload: false,
});
const manRopr = Manrope({ subsets: ["latin"], preload: false });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusChakarthaSans.className}>
        <nav className="bg-white flex justify-center   lg:h-[60px] md:h-[54px]  h-[50px] md:py-2 py-1   lg:px-[100px]  md:px-[42px] px-[34px]">
          <div className="container  flex flex-nowrap justify-between items-center  ">
            <div className=" w-[60px] h-[30px] relative ">
              <Image
                src="/image/icons/logo1.png"
                 fill
                className="object cover"
                alt="Picture of the author"
              />
            </div>

            <div className="flex  items-center">
              <button
                id="menu-toggle"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100   md:hidden"
              >
                <IoReorderThree className="text-[45px]" />
              </button>
            </div>

            <div
              className="flex-1 md:block md:w-auto hidden "
         
            >
              <ul className="flex flex-col mt-4 md:flex-row md:justify-end md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li className="flex justify-between">
                  <Link
                    href="/contact"
                    className="flex py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50  md:border-0  md:p-0   "
                  >
                    <MdMailOutline className="w-5 h-5 text-red-500" />
                    <div className="ms-4">
                      <p className="text-red-500 text-sm">Email</p>
                      <p className="text-black text-xs">
                        info@united-education.com
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50  md:border-0  md:p-0   "
                  >
                    <FiPhone className="w-5 h-5 text-red-500" />
                    <div className="ms-4">
                      <p className="text-red-500 text-sm">Call Us</p>
                      <p className="text-black text-xs">+964 751 762 7727</p>
                    </div>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50  md:border-0  md:p-0   "
                  >
                    <IoLocationOutline className="w-5 h-5 text-red-500" />
                    <div className="ms-4">
                      <p className="text-red-500 text-sm">Location</p>
                      <p className="text-black text-xs">
                        Erbil, Empire Business Tower, Tower 4, Floor 15, Office
                        NO 1
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex justify-center">
          <div className="max-w-[1536px]">{children}</div>
        </div>


<footer className="w-full   bg-[#022837]  lg:px-[80px] px-[34px] sm:px-[47px] ">
          <div className="container  flex   w-full  lg:flex-row flex-col  py-24   md:items-start ">
            <div className="flex md:justify-between  flex-col md:flex-row lg:flex-col w-full  lg:w-72 lg:mx-0 items-center md:items-start">
              <Link href={""}>
                <Image
                  src="/image/icons/sticky-logo1.png"
                  width={110}
                  height={60}
                  alt="Picture of the author"
                />
              </Link>
              <div className=" lg:w-full sm:w-72 w-60 mt-5 md:mt-0">
                <p className="lg:mt-8 mt-0 text-white lg:text-lg sm:text-sm text-[8px] sm-mt-2">
                  Sign up for releases & product updates...
                </p>
                <div className="relative ">
                  <input
                    type="text"
                    placeholder="Enter email address "
                    className="border-b-2 w-full  text-xs py-3  border-[#4D6873] bg-[#022837] lg:mt-5 mt-2 text-[#4D6873]"
                  />
                  <FaArrowRight className="absolute right-0 bottom-2 my-1 text-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap text-center justify-between md:ms-8 ms:0 w-full mt-5  lg:mt-0  md:text-left">
              <div className="w-full px-4 ">
                <h2 className="mb-3 lg:text-xl sm:text-lg text-lg font-medium text-white ">
                  About
                </h2>
                <nav className="mb-10 list-none lg:text-lg   text-sm">
                  <li className="mt-3">
                    <Link
                      href={"#"}
                      className="text-[#CFCFCF] cursor-pointer  "
                    >
                      Our Story
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      Treatments Safer
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      href={"#"}
                      className="text-[#CFCFCF] cursor-pointer  "
                    >
                      Journal
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      Candles
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 ">
                <h2 className="mb-3 lg:text-xl sm:text-lg text-lg font-medium text-white  ">
                  Company
                </h2>

                <nav className="mb-10 list-none hidden md:block lg:text-lg   text-sm">
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      About
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      Contact
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      Products
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      Privacy
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 ">
                <h2 className="mb-3 lg:text-xl sm:text-lg text-lg font-medium text-white  ">
                  Help
                </h2>
                <nav className="mb-10 list-none  hidden md:block lg:text-lg  md:text-md text-sm">
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      FAQs
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      Terms of service
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      Cookies
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      Privacy
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 ">
                <h2 className="mb-3 lg:text-xl sm:text-lg text-lg font-medium text-white  ">
                  Social Media
                </h2>
                <nav className="mb-10 list-none  hidden md:block lg:text-lg   text-sm">
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      Facebook
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      href={"#"}
                      className="text-[#CFCFCF] cursor-pointer  "
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link href={"#"} className="text-[#CFCFCF] cursor-pointer ">
                      LinkedIn
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="border-[#4D6873] border-t-2 py-5">
            <p className="text-sm text-[#CFCFCF] capitalize text-center">
              © 2024 united education. All right reserved.
            </p>
          </div>
        </footer>

       
      </body>
    </html>
  );
}
