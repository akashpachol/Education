import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import {
  IoArrowBack,
  IoArrowBackOutline,
  IoArrowForward,
} from "react-icons/io5";

export default function Home() {
  const imageurls = {
    homepageSliderImage: "https://test.com",
  };
  return (
    <main className="min-h-screen ">
      <section className="relative w-full md:h-[650px] h-[500px]">
        <div className="absolute inset-0 ">
          <Image
            src="/image/Rectangle5788.png"
            layout="fill"
          
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative flex h-full items-center justify-center  w-full ">
          <div className="flex items-center  w-full">
            <div className="lg:w-1/4 sm:w-1/6 w-1/12 text-white   flex md:ps-20 ps-6">
              <IoArrowBackOutline className="lg:text-3xl text-xl" />
            </div>

            <div className="text-center text-white flex-1  ">
              <div className="flex items-center justify-center ">
                <div className="md:w-10 w-16 md:border-t border-t-2 border-white"></div>

                <span className={`lg:text-[18px] md:text-[12px] text-[10px] text-white font-normal mx-3  leading-[50px] `}>
                  WELCOME TO UNITED EDUCATION
                </span>

                <div className="md:w-10 w-16 md:border-t border-t-2 border-white"></div>
              </div>
              <h2 className="lg:text-[40px] md:text-[27px] text-[22px] font-bold md:leading-[40px] lg:leading-[50px] ">
                World Class Training Solutions for Professionals in the Oil and
                Gas Industries
              </h2>

              <p className="lg:text-[18px] font-normal text-sm text-[#BDBDBE]  leading-[50px] ">
                Learn how you can grow your knowledge and advance your career.
              </p>
              <button
                type="button"
                className="mx-auto text-white bg-[#DC272F] font-medium lg:text-lg md:text-base text-sm md:px-8 px-10 py-2 lg:px-6  lg:py-4 mt-3 mb-5 rounded-tr-lg rounded-b-lg"
              >
                Get Started
              </button>
            </div>

            <div className="lg:w-1/4 sm:w-1/6 w-1/12 text-white   flex justify-end md:pe-20 pe-6">
              <IoArrowForward className="lg:text-3xl text-xl" />
            </div>
          </div>
        </div>

        <div className="absolute md:w-4/5 w-4/5 lg:-bottom-40 md:-bottom-12 -bottom-[320px] left-1/2 transform -translate-x-1/2 ">
          <div className="grid md:grid-cols-3  rounded-xl grid-cols-1 shadow-md bg-white md:px-0 sm:px-20 px-5  md:py-5 py-0">
            <div className="md:flex block md:px-0  lg:py-5">
              <div className=" md:px-10 md:py-0 py-4 flex flex-col">
                <div className="relative w-6 h-6 md:w-8 md:h-8 items-center flex justify-center">
                  <Image
                    src="/image/icons/image65.png"
                    fill
                    unoptimized
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </div>

                <h5 className="lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[55px] md:leading-[45px] leading-[35px]  font-semibold  text-[#04374B]">
                  Quality Driven
                </h5>
                <p className=" lg:text-sm md:text-[9px] text-[12px] font-normal text-[#365F6F] lg:leading-6 md:leading-4">
                  We always deliver the best quality and performance for both
                  our products and services.
                </p>
              </div>
              <div className=" md:border-r-2 border-b-2 border-[#CDCDCD] mx-2 md:mx-0 my-0  md:my-10"></div>
            </div>

            <div className="md:flex block md:px-0  lg:py-5">
            <div className=" md:px-10 md:py-0 py-4 flex flex-col">
            <div className="relative w-6 h-6 md:w-8 md:h-8 items-center flex justify-center">
                  <Image
                    src="/image/icons/image66.png"
                    fill
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </div>

                <h5 className="    lg:text-[20px] md:text-[16px] text-[12px] lg:leading-[55px] md:leading-[45px] leading-[35px]  font-semibold  text-[#04374B]">
                  Corporate Training
                </h5>
                <p className="lg:text-sm md:text-[9px] text-[12px] font-normal text-[#365F6F] lg:leading-6 leading-4">
                  We can tailor our courses to your needs and create unique
                  programmer that may include various workshops
                </p>
              </div>

              <div className=" md:border-r-2 border-b-2 border-[#CDCDCD] mx-2 md:mx-0 my-0  md:my-10"></div>
            </div>
            <div className="md:flex block md:px-0  lg:py-5">
            <div className=" md:px-10 md:py-0 py-4 flex flex-col">
            <div className="relative w-6 h-6 md:w-8 md:h-8 items-center flex justify-center">
                  <Image
                    src="/image/icons/image67.png"
                    fill
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </div>

                <h5 className="    lg:text-[20px] md:text-[16px] text-[12px] lg:leading-[55px] md:leading-[45px] leading-[35px]  font-semibold  text-[#04374B]">
                  Global Sourcing
                </h5>
                <p className=" lg:text-sm md:text-[9px] text-[12px] font-normal text-[#365F6F] lg:leading-6 md:leading-4">
                Exploiting global efficiencies in the delivery of our products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* course */}
      <section className="lg:px-[80px] px-[34px] sm:px-[47px] md:mt-20  lg:mt-56 mt-96  mb-10">
        <div className="flex items-center">
          <div className="w-14 border-t-2 border-[#DC272F] "></div>

          <p className="lg:text-lg text-sm  text-[#DC272F] ms-3">
            OUR COURSE
          </p>
        </div>

        <div className="flex items-end">
          <h2 className="lg:w-1/2 md:w-1/3 w-3/5 text-lg  lg:text-[40px] lg:leading-[55px] md:text-2xl   font-semibold ">
            We Offer Bunce of Training & Coaching Program!
          </h2>
          <div className="flex-1"></div>
          <button
            type="button"
            className="focus:outline-none  text-white bg-[#DC272F] lg:block hidden   font-medium  text-sm px-5 py-3  rounded-tr-lg rounded-b-lg"
          >
           View all programs
          </button>
          <div className="text-[#DC272F] lg:hidden block ">
            <span>
              <IoIosArrowForward className="text-xl" />
            </span>
          </div>
        </div>

        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-3  md:gap-3 mt-5">
          <div className="relative px-2 py-3  ms-[28px] bg-white  rounded-lg border border-gray-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame4.png"
                  fill
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="ml-5">
              <h2 className="text-[18px] font-semibold text-[#04374B]">
                CompEx Certification in Erbil, Iraq
              </h2>
              <p className="text-[#365F6F] text-sm  mt-1">
                United Education has an excellent training facility
                in Erbil (Kurdistan Region of Iraq) for professionals who would
                like to achieve.
              </p>
              <a
                href="#"
                className="text-[#04374B] font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-3 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative px-2 py-3  ms-[28px] bg-white  rounded-lg border border-gray-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-5">
            <h2 className="text-[18px] font-semibold text-[#04374B]">
            Lifting Operations Courses
              </h2>
              <p className="text-[#365F6F] text-sm  mt-1">
                These courses are suitable for anyone who is involved with
                lifting operations. The course will provide participants with
                the.
              </p>
              <a
                href="#"
                className="text-[#04374B] font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative px-2 py-3  ms-[28px] bg-white  rounded-lg border border-gray-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame5.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-5">
            <h2 className="text-[18px] font-semibold text-[#04374B]">
            Well Design and Engineering
              </h2>
              <p className="text-[#365F6F] text-sm  mt-1">
                Well Design and Engineering integrates all major well design
                technologies from pre-spud to TD. Participants are actively.
              </p>
              <a
                href="#"
                className="text-[#04374B] font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative px-2 py-3  ms-[28px] bg-white  rounded-lg border border-gray-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame 6.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-5">
            <h2 className="text-[18px] font-semibold text-[#04374B]">
            CompEx Certification in Erbil, Iraq
              </h2>
              <p className="text-[#365F6F] text-sm  mt-1">
                United Education has an excellent training facility
                in Erbil (Kurdistan Region of Iraq) for professionals who would
                like to achieve.
              </p>
              <a
                href="#"
                className="text-[#04374B] font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative px-2 py-3 ms-[28px] bg-white  rounded-lg border border-gray-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame7.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-5">
            <h2 className="text-[18px] font-semibold text-[#04374B]">
            Lifting Operations Courses
              </h2>
              <p className="text-[#365F6F] text-sm mt-1">
                These courses are suitable for anyone who is involved with
                lifting operations. The course will provide participants with
                the.
              </p>
              <a
                href="#"
                className="text-[#04374B] font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative px-2 py-3  ms-[28px] bg-white  rounded-lg border border-gray-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame8.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-5">
            <h2 className="text-[18px] font-semibold text-[#04374B]">
            Well Design and Engineering
              </h2>
              <p className="text-[#365F6F] text-sm mt-1">
                Well Design and Engineering integrates all major well design
                technologies from pre-spud to TD. Participants are actively.
              </p>
              <a
                href="#"
                className="text-[#04374B] font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="flex flex-col-reverse  lg:flex-row lg:justify-center lg:px-[80px] px-[34px] sm:px-[47px]">
        <div className="grid grid-rows-2 grid-flow-col  gap-3 w-full lg:mt-0 mt-5 lg:w-2/4">
          <div className="  lg:col-span-1  col-span-2  md:order-1 order-2">
            <div className="relative  w-full lg:h-full h-48 ">
              <Image
                src="/image/Rectangle114.png"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="  lg:col-span-1  col-span-2  md:order-2 order-1">
            <div className="relative  w-full h-full ">
              <Image
                src="/image/Rectangle115.png"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="row-span-2   md:order-3 order-3">
            <div className="relative  w-full h-full ">
              <Image
                src="/image/Rectangle116.png"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-2/4 w-full lg:ms-5 ">
          <div className="flex items-center">

            <p className="lg:text-lg text-sm  text-[#DC272F] mr-3">ABOUT US</p>
            <div className="w-14 border-t-2 border-[#DC272F] "></div>
          </div>

          <div className=" flex lg:block ">
          <h1 className=" text-lg lg:text-[40px] lg:leading-[55px] md:text-2xl font-semibold text-[#04374B] ">
              Our Real Commitment Reaches Beyond Gas & Oil Company.
            </h1>
            <div className="text-[#DC272F] lg:hidden   flex justify-end flex-1 ">
              <span>
                <IoIosArrowForward className="text-xl" />
                
              </span>
            </div>
          </div>

          <p className="text-base mt-4 font-medium text-[#DC272F]">
            UE is a private educational and training services provider,
            following huge educational and skill needs among our people that
            make it difficult for the country and nation to develop and cope
            with the rest of the world.
          </p>
          <p className="mt-2 text-base font-normal text-[#365F6F]">
            UE is specialized in educational and training services, ranging from
            language education, business skills development, and special
            technical and vocational training services.
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-[#DC272F] lg:block hidden   font-medium  text-sm px-5 py-3 mt-5 rounded-tr-lg rounded-b-lg"
          >
            Learn More
          </button>
        </div>
      </section>



      {/* over all */}
      <section className="bg-[url('/image/Rectangle5795.png')] bg-cover items-center h-64 mt-10 grid grid-cols-2 md:grid-cols-4">
  <div className="text-center">
    <p className="text-5xl text-white font-bold">650+</p>
    <p className="text-sm mt-4 text-[#E6EBEB]">Project Completed</p>
    <div className="w-full border-b-4 ms-10 mt-4 border-[#049CB3] md:hidden"></div>
  </div>
  <div className="text-center md:border-l-4 border-[#049CB3]">
    <p className="text-5xl text-white font-bold">200+</p>
    <p className="text-sm mt-4 text-[#E6EBEB]">Team Engineers</p>
    <div className="w-[90%] border-b-4 me-20 mt-4 border-[#049CB3] md:hidden"></div>
  </div>
  <div className="text-center md:border-l-4 border-[#049CB3]">
    <p className="text-5xl text-white font-bold">300+</p>
    <p className="text-sm mt-4 text-[#E6EBEB]">Clients Worldwide</p>
  </div>
  <div className="text-center md:border-l-4 border-[#049CB3]">
    <p className="text-5xl text-white font-bold">10+</p>
    <p className="text-sm mt-4 text-[#E6EBEB]">Years Of Experiences</p>
  </div>
</section>


      {/* our service */}
      <section className="lg:px-[80px] px-[34px] sm:px-[47px] mt-10">
        <div className="flex items-center">
      
          <div className="w-14 border-t-2 border-[#DC272F] "></div>

          <p className="lg:text-lg text-sm  text-[#DC272F] ms-3">OUR SERVICES</p>
        </div>
        

<div className="flex items-end">
          <h2 className="lg:w-1/2 md:w-1/3 w-3/5 text-lg  lg:text-[40px] lg:leading-[55px] md:text-2xl   font-semibold ">
          We Provide Best Services
          </h2>
          <div className="flex-1"></div>
          <button
            type="button"
            className="focus:outline-none  text-white bg-[#DC272F] lg:block hidden   font-medium  text-sm px-5 py-3  rounded-tr-lg rounded-b-lg"
          >
           Learn More
          </button>
          <div className="text-[#DC272F] lg:hidden block ">
            <span>
              <IoIosArrowForward className="text-xl" />
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-5 sm:grid-cols-3">
          <div className=" px-6 bg-[#F7F7F7]   rounded-xl shadow my-5">
            <div className="w-10 h-10 bg-[#04374B] items-center flex justify-center">
              <Image
                src="/image/icons/Frame.png"
                width={28}
                height={28}
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 text-lg font-bold tracking-tight text-[#04374B] ">
              Well Design Services
            </h5>

            <p className="mb-3 text-sm font-normal text-[#365F6F] leading-6">
              From applied literature to educational resources, we have a lot of
              textbooks to offer.
            </p>
            <Link
              href="#"
              className="inline-flex items-center   py-2 text-sm font-medium text-center mb-8 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>

          <div className=" px-6 bg-[#F7F7F7]   rounded-xl shadow my-5">
            <div className="w-10 h-10 bg-[#04374B] items-center flex justify-center">
              <Image
                src="/image/icons/Frame1.png"
                width={28}
                height={28}
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 text-lg font-bold tracking-tight text-[#04374B] ">
              Horizontal & Multilateral Technology
            </h5>

            <p className="mb-3 text-sm font-normal text-[#365F6F] leading-6">
              From applied literature to educational resources, we have a lot of
              textbooks to offer.
            </p>

            <Link
              href="#"
              className="inline-flex items-center  py-2 text-sm font-medium text-center mb-10 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>
          <div className=" px-6 bg-[#F7F7F7]   rounded-xl shadow my-5">
            <div className="w-10 h-10 bg-[#04374B] items-center flex justify-center">
              <Image
                src="/image/icons/Frame2.png"
                width={28}
                height={28}
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 text-lg font-bold tracking-tight text-[#04374B] ">
              Preparation of Well Programmes
            </h5>

            <p className="mb-3 text-sm font-normal text-[#365F6F] leading-6">
              From applied literature to educational resources, we have a lot of
              textbooks to offer.
            </p>

            <Link
              href="#"
              className="inline-flex items-center  py-2 text-sm font-medium text-center mb-10 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>
          <div className=" px-6 bg-[#F7F7F7]   rounded-xl shadow my-5">
            <div className="w-10 h-10 bg-[#04374B] items-center flex justify-center">
              <Image
                src="/image/icons/Frame3.png"
                width={28}
                height={28}
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 text-lg font-bold tracking-tight text-[#04374B] ">
              Data Mining
            </h5>

            <p className="mb-3 text-sm font-normal text-[#365F6F] leading-6">
              From applied literature to educational resources, we have a lot of
              textbooks to offer.
            </p>

            <Link
              href="#"
              className="inline-flex items-center  py-2 text-sm font-medium text-center mb-10"
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>
        </div>
      </section>
      {/* Our Mission & Vision */}
      <section className="bg-[#14516A] gap-8 max-h-[835px] md:flex lg:px-[80px] px-[34px] sm:px-[47px] lg:py-[40px] py-[17px] sm:py-[24px] mt-10">
        <div className="md:w-1/2 w-full">
          <div className="flex items-center">
           
            <span className="text-sm text-white font-extralight me-3">
              OUR MISSION & VISION
            </span>
            <div className="w-16 border-t-2 text-white"></div>
          </div>
          <div className="mt-5 text-white">
            <h2 className="text-2xl">Our Vision </h2>
            <h3 className="text-xl font-semibold mt-8 hidden lg:block">
              UNITED EDUCATION
            </h3>
            <p className="font-extralight lg:text-lg md:text-sm text-[8px] lg:leading-7 leading-4 mt-2">
              Our vision is having a trained, knowledgeable and skillful future
              generation in our country who can guarantee a better life for
              themselves and the whole nation by been powerful producible human
              resources.
            </p>
            <h2 className="text-2xl mt-5">Our Mission</h2>
            <h3 className="text-xl font-semibold mt-8 hidden lg:block">
              UNITED EDUCATION
            </h3>

            <p className="font-extralight lg:text-lg md:text-sm text-[8px] lg:leading-7 mt-2">
              Our mission is to make professional, advanced education and
              training available for most governmental institutions, schools,
              universities, businesses and individuals throughout the country
              and equip them with tools to shape their future and reach their
              goals in the community and workplace.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full items-end flex justify-end ">
          <div className="relative lg:w-[530px] lg:h-[550px] md:w-[315px] md:h-[389px] w-full h-[200px] md:mt-0 mt-5">
            <Image
              src="/image/Rectangle72.png"
              fill
              alt="Picture of the author"
              className=""
            />
          </div>
        </div>
      </section>

      <section className="lg:px-[80px] px-[34px] sm:px-[47px] my-10 ">
        <div className="flex lg:flex-col flex-row justify-between items-center" >
        <div className="text-center">
          <div className="flex justify-center items-center">
            <div className="lg:w-10 border-t-2 border-[#DC272F] w-16 "></div>

            <span className="text-lg text-[#DC272F] mx-3">LATEST NEWS</span>
            <div className="w-10 border-t-2 border-[#DC272F] lg:block hidden "></div>
          </div>

          <h2 className="flex-1 lg:text-[40px] mt-2 text-xl font-semibold">
            Our Latest Blogs
          </h2>
        </div>
        <div className="text-[#DC272F] lg:hidden block ">
            <span>
              <IoIosArrowForward className="text-xl" />
            </span>
          </div>
        </div>
       

        <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-3">
          <div className="     rounded-xl  my-5">
            <div className=" relative w-full h-64">
              <Image
                src="/image/Rectangle129.png"
                fill
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 text-lg font-bold tracking-tight text-black  ">
              Drilling and well control simulator.
            </h5>

            <p className="mb-3 text-sm font-normal text-[#365F6F] leading-6">
              From applied literature to educational resources, we have a lot of
              textbooks to offer.
            </p>
            <Link
              href="#"
              className="inline-flex items-center  text-[#DC272F] py-2 text-sm font-medium text-center mb-10 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>

          <div className="rounded-xl  my-5">
            <div className=" relative w-full h-64">
              <Image
                src="/image/Rectangle131.png"
                fill
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 text-lg font-bold tracking-tight text-black  ">
              Gaming technology inspires.
            </h5>

            <p className="mb-3 text-sm font-normal text-[#365F6F] leading-6">
              With a team of skilled therapists, we can accommodate requests at
              short notice and maintain.
            </p>
            <Link
              href="#"
              className="inline-flex items-center  text-[#DC272F] py-2 text-sm font-medium text-center mb-10 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>
          <div className="     rounded-xl  my-5">
            <div className=" relative w-full h-64">
              <Image
                src="/image/Rectangle130.png"
                fill
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 text-lg font-bold tracking-tight text-black  ">
              DrillSIM:20 simulator now available.
            </h5>

            <p className="mb-3 text-sm font-normal text-[#365F6F] leading-6">
              With a team of skilled therapists, we can accommodate requests at
              short notice and maintain.
            </p>
            <Link
              href="#"
              className="inline-flex items-center  text-[#DC272F] py-2 text-sm font-medium text-center mb-10 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <button
            type="button"
            className="focus:outline-none lg:block text-white bg-[#DC272F]  hidden   font-medium  text-sm px-5 py-2.5  rounded-tr-lg rounded-b-lg"
          >
            View All Blogs
          </button>
        </div>
      </section>

      <section className="lg:px-[80px] px-[34px] sm:px-[47px] mt-10 bg-[#FAFAFA] pt-10">
        <div className="max-w-2xl mx-auto  p-8 bg-[#FAFAFA] rounded-md form-container">
          <div className="text-center ">
            <h2 className="flex-1 lg:text-2xl text-xl text-[#04374B] font-semibold mb-4">
              Get Free Consultation
            </h2>
            <span className="text-sm text-[#365F6F]  mx-6">
              {" "}
              We provide best health care for your family. We are giving the
              best treatment services.
            </span>
          </div>
          <form action="" className="mt-5 font-extralight">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-xs font-light">
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-[#04374B] text-sm  mb-2 "
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3  border rounded-md bg-[#F6F0F0] p-4 focus:outline-none"
                />
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-[#04374B] text-sm  mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3  border rounded-md bg-[#F6F0F0] p-4 focus:outline-none"
                />
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-[#04374B] text-sm  mb-2"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Phone Number"
                  required
                  className="w-full px-3  border rounded-md bg-[#F6F0F0] p-4 focus:outline-none"
                />
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-[#04374B]text-sm  mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Email"
                  required
                  className="w-full px-3  border rounded-md bg-[#F6F0F0] p-4 focus:outline-none"
                />
              </div>
            </div>

            <div className="my-4">
              <label
                htmlFor="message"
                className="block text-[#04374B] text-sm font-light mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type somthing?"
                required
                className="w-full px-3 text-sm border rounded-md bg-[#F6F0F0] p-4 focus:outline-none"
              ></textarea>
            </div>
            <div className=" grid grid-cols-2 md:hidden ">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300   rounded-lg px-5 py-2.5 me-2 mb-2 text-xs font-light"
              >
                Enquire about staff outsourcing!
              </button>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300   rounded-lg px-5 py-2.5 me-2 mb-2 text-xs font-light"
              >
                Enquire about staff outsourcing!
              </button>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300   rounded-lg px-5 py-2.5 me-2 mb-2 text-xs font-light"
              >
                Enquire about staff outsourcing!
              </button>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300   rounded-lg px-5 py-2.5 me-2 mb-2 text-xs font-light"
              >
                {" "}
                Enquire about staff outsourcing!
              </button>
            </div>
            <button
              type="submit"
              className="bg-[#04374B] text-white px-4 text-sm font-extralight py-2 rounded-md  w-full"
            >
              SEND YOUR MESSAGE
            </button>
          </form>
        </div>
      </section>
      <section className="lg:px-[80px]   px-[34px] sm:px-[47px] grid md:grid-cols-5 grid-cols-2 gap-5 py-10">
        <div className="relative   items-center lg:w-[160px] lg:h-[48px] w-[105px]  md:h-[38px]  h-[30px] mx-auto">
          <Image
            src="/image/Page-1.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] mx-auto">
          <Image
            src="/image/Logo5.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] mx-auto">
          <Image
            src="/image/6.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] mx-auto">
          <Image
            src="/image/9.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="md:col-span-1 col-span-2  flex justify-center ">
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] ">
          <Image
            src="/image/10.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        </div>
      
      </section>
    </main>
  );
}
