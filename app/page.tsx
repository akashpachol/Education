import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  const imageurls={
    homepageSliderImage:"https://test.com"
  }
  return (
    <main className="min-h-screen ">
      <section className="relative w-full h-[650px]">
        <div className="absolute inset-0 w-full">
          <Image
            src="/image/Rectangle5788.png"
            layout="fill"
            objectFit="cover"
            alt="Picture of the author"
            className="object-cover"
          />
        </div>
        <div className="relative flex h-full items-center justify-center bg-opacity-50 w-full mx-auto">
          <div className="flex items-center justify-center w-full">
            <div className="w-1/4 text-white flex justify-center">
              <FaArrowLeft className="lg:text-2xl text-xl" />
            </div>

            <div className="text-center text-white w-2/4 lg:mx-10 mx-0">
              <div className="flex items-center justify-center">
                <div className="w-5 border-t-2 border-white"></div>

                <span className="lg:text-lg text-sm text-[#BDBDBE] ms-3">
                  Welcome to United Education
                </span>

                <div className="w-5 border-t-2 border-white"></div>
              </div>
              <h2 className="lg:text-4xl md:text-3xl text-xl font-bold mb-4">
                World Class Training Solutions for Professionals in the Oil and
                Gas Industries
              </h2>
              <p className="lg:text-lg text-sm text-[#BDBDBE]">
                Learn how you can grow your knowledge and advance your career.
              </p>
              <button
                type="button"
                className="mx-auto text-white bg-red-500 font-medium text-sm px-5 mb-5 py-2.5 md:mt-5 mt-3 rounded-tr-lg rounded-b-lg"
              >
                Get Started
              </button>
            </div>

            <div className="w-1/4 text-white flex justify-center">
              <FaArrowRight className="lg:text-2xl text-xl" />
            </div>
          </div>
        </div>

        <div className="absolute md:w-4/5 w:3/5 lg:-bottom-48 md:-bottom-20 -bottom-[274px] left-1/2 transform -translate-x-1/2 ">
          <div className="grid md:grid-cols-3  rounded-xl grid-cols-1 shadow-md bg-white">
            <div className="md:flex block md:px-0 px-16 lg:py-5">
              <div className="  my-5 md:px-8 px-0">
              <div className="relative w-6 h-6 md:w-8 md:h-8 items-center flex justify-center">
              <Image
                    src="/image/icons/image65.png"
                    fill
                    unoptimized
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </div>

                <h5 className="mb-2 mt-2 lg:mt-6  lg:text-xl text-xs font-semibold  text-[#04374B]">
                  Quality Driven
                </h5>
                <p className="mb-3 lg:text-sm text-[10px] font-normal text-[#365F6F] lg:leading-6 leading-3">
                  We always deliver the best quality and performance for both
                  our products and services.
                </p>
              </div>
              <div className=" md:border-r-2 border-b-2 border-[#CDCDCD] mx-2 md:mx-0 my-0  md:my-14"></div>
            </div>

            <div className="md:flex block lg:px-0 px-16 lg:py-5">
              <div className="  my-5 lg:px-8 px-0">
              <div className="relative w-6 h-6 md:w-8 md:h-6  items-center flex justify-center">
              <Image
                    src="/image/icons/image66.png"
                    fill
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </div>

                <h5 className="mb-2 mt-2 lg:mt-6 lg:text-xl text-xs font-semibold  text-[#04374B]">
                Corporate Training
                </h5>
                <p className="mb-3 lg:text-sm text-[8px] font-normal text-[#365F6F] lg:leading-6 leading-3">
                We can tailor our courses to your needs and create unique programmer that may include various workshops                </p>
              </div>

              <div className=" md:border-r-2 border-b-2 border-[#CDCDCD] mx-2 md:mx-0 my-0  md:my-14"></div>
              </div>
            <div className="md:flex block lg:px-0 px-16 lg:py-5">
            <div className="  my-5 lg:px-8 px-0">
                <div className="relative w-6 h-6 md:w-8 md:h-6  items-center flex justify-center">
                  <Image
                    src="/image/icons/image67.png"
                    fill
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </div>

                <h5 className="mb-2 mt-2 lg:mt-6 lg:text-xl text-xs font-semibold  text-[#04374B]">
                Global Sourcing
                </h5>
                <p className="mb-3 lg:text-sm text-[8px] font-normal text-[#365F6F] lg:leading-6 leading-3">
                We always deliver the best quality and performance for both our products and services.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* course */}
      <section className="lg:px-[80px] px-[34px] sm:px-[47px] md:mt-32  lg:mt-56 mt-72  mb-10">
        <div className="flex items-center">
          <div className="w-5 border-t-2 border-red-500 "></div>

          <span className="lg:text-lg md:text-sm text-[8px] text-red-500 ms-3">OUR COURSE</span>
        </div>

        <div className="flex items-center">
          <h2 className="lg:w-1/3 lg:text-2xl text-2xl font-semibold ">
            We Offer Bunce of Training & Coaching Program!
          </h2>
          <div className="flex-1"></div>
          <button
            type="button"
            className="focus:outline-none  text-white bg-red-500 lg:block hidden   font-medium  text-sm px-5 py-2.5 mt-5 rounded-tr-lg rounded-b-lg"
          >
            Learn More
          </button>
          <div className="text-red-500 lg:hidden block pe-5">
            <span>
              <IoIosArrowForward className="text-xl" />
            </span>
          </div>
        </div>

        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-5">
          <div className="relative p-6 ms-6 bg-white  rounded-lg border border-gray-300">
            <div className="absolute -left-6  py-7 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame4.png"
                  fill
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="ml-4">
              <h2 className="text-[16px] font-semibold text-[#04374B]">
                CompEx Certification in Erbil, Iraq
              </h2>
              <p className="text-[#365F6F] text-sm mt-1">
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
          <div className="relative p-6 ms-6 bg-white shadow rounded-lg border border-gray-300">
          <div className="absolute -left-6  py-7 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
          <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-4">
              <h2 className="text-[16px] font-semibold text-[#04374B]">
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
          <div className="relative p-6 ms-6 bg-white shadow rounded-lg border border-gray-300">
          <div className="absolute -left-6  py-7 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
          <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame5.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-4">
              <h2 className="text-[16px] font-semibold text-[#04374B]">
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
          <div className="relative p-6 ms-6 bg-white shadow rounded-lg border border-gray-300">
          <div className="absolute -left-6  py-7 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
          <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame 6.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-4">
              <h2 className="text-[16px] font-semibold text-[#04374B]">
                CompEx Certification in Erbil, Iraq
              </h2>
              <p className="text-[#365F6F] text-sm mt-1">
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
          <div className="relative p-6 ms-6 bg-white shadow rounded-lg border border-gray-300">
          <div className="absolute -left-6  py-7 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
          <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame7.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-4">
              <h2 className="text-[16px] font-semibold text-[#04374B]">
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

          <div className="relative p-6 ms-6 bg-white shadow rounded-lg border border-gray-300">
             <div className="absolute -left-6  py-7 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame8.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-4">
              <h2 className="text-[16px] font-semibold text-[#04374B]">
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
        <div className="grid grid-rows-2 grid-flow-col  gap-3 w-full lg:mt-0 mt-5 lg:w-3/5">
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
        <div className="lg:w-2/5 w-full ms-5 ">
          <div className="flex items-center">
            <span className="text-lg text-red-500 mr-3">Abouts</span>
            <div className="w-5 border-t-2 border-red-500 "></div>
          </div>

          <div className=" flex lg:block">
            <div className="lg:text-3xl flex-1 md:text-2xl text-xl lg:font-semibold font-medium lg:w-full w-1/2">
              OUR REAL COMMITMENT REACHES BEYOND GAS & OIL COMPANY.
            </div>
            <div className="text-red-500 lg:hidden   flex justify-end w-1/5 pe-5">
              <span>
                <IoIosArrowForward className="text-xl" />
              </span>
            </div>
          </div>

          <p className="text-md mt-4 text-red-500">
            UE is a private educational and training services provider,
            following huge educational and skill needs among our people that
            make it difficult for the country and nation to develop and cope
            with the rest of the world.
          </p>
          <p className="mt-2 text-md text-[#365F6F]">
            UE is specialized in educational and training services, ranging from
            language education, business skills development, and special
            technical and vocational training services.
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-500 lg:block hidden   font-medium  text-sm px-5 py-2.5 mt-5 rounded-tr-lg rounded-b-lg"
          >
            Learn More
          </button>
        </div>
      </section>

      
      {/* over all */}
      <section className="bg-[url('/image/Rectangle5795.png')] bg-cover items-center h-64 mt-10  grid grid-cols-2 md:grid-cols-4">
        <div className="  text-center">
          <p className="text-3xl text-white">650+</p>
          <p className="text-sm mt-4 text-[#E6EBEB]">Project Completed</p>
        </div>
        <div className="  text-center">
          <p className="text-3xl text-white">200+</p>
          <p className="text-sm mt-4 text-[#E6EBEB]">Team Engineers</p>
        </div>
        <div className="  text-center">
          <p className="text-3xl text-white">300+</p>
          <p className="text-sm mt-4 text-[#E6EBEB]">Clients Worldwide</p>
        </div>
        <div className="  text-center">
          <p className="text-3xl text-white">10+</p>
          <p className="text-sm mt-4 text-[#E6EBEB]">Years Of Experiences</p>
        </div>
      </section>


      {/* our service */}
      <section className="lg:px-[80px] px-[34px] sm:px-[47px] mt-10">
        <div className="flex items-center">
          <div className="w-5 border-t-2 border-red-500 "></div>

          <span className="text-lg text-red-500 ms-3">Our Services</span>
        </div>
        <div className="flex items-center">
          <h2 className="flex-1 lg:text-3xl text-2xl font-semibold">
            We Provide Best Services
          </h2>
          <button
            type="button"
            className="focus:outline-none  text-white bg-red-500 lg:block hidden   font-medium  text-sm px-5 py-2.5 mt-5 rounded-tr-lg rounded-b-lg"
          >
            Learn More
          </button>
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
            <div className="w-12 border-t-2 text-white"></div>
            <span className="text-sm text-white font-extralight ms-3">
              OUR MISSION & VISION
            </span>
          </div>
          <div className="mt-5 text-white">
            <h2 className="text-2xl">Our Mission</h2>
            <h3 className="text-xl font-extralight mt-8 hidden lg:block">
              UNITED EDUCATION
            </h3>
            <p className="font-extralight lg:text-lg md:text-sm text-[8px] lg:leading-7 leading-4 mt-2">
              Our vision is having a trained, knowledgeable and skillful future
              generation in our country who can guarantee a better life for
              themselves and the whole nation by been powerful producible human
              resources.
            </p>
            <h2 className="text-2xl mt-5">Our Vision</h2>
            <h3 className="text-xl font-extralight mt-8 hidden lg:block">
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
        <div className="text-center">
          <div className="flex justify-center items-center">
            <div className="w-10 border-t-2 border-red-500 "></div>

            <span className="text-sm text-red-500 mx-3">Latest News</span>
            <div className="w-10 border-t-2 border-red-500 "></div>
          </div>

          <h2 className="flex-1 lg:text-2xl text-xl font-semibold">
            Our Latest Blogs
          </h2>
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
              className="inline-flex items-center  text-red-500 py-2 text-sm font-medium text-center mb-10 "
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
              className="inline-flex items-center  text-red-500 py-2 text-sm font-medium text-center mb-10 "
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
              className="inline-flex items-center  text-red-500 py-2 text-sm font-medium text-center mb-10 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <button
            type="button"
            className="focus:outline-none text-white bg-red-500 lg:block hidden   font-medium  text-sm px-5 py-2.5  rounded-tr-lg rounded-b-lg"
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
              best treatment services.{" "}
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
                  className="w-full px-3  border rounded-md bg-[#F6F0F0] p-4"
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
                  className="w-full px-3  border rounded-md bg-[#F6F0F0] p-4"
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
                  className="w-full px-3  border rounded-md bg-[#F6F0F0] p-4"
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
                  className="w-full px-3  border rounded-md bg-[#F6F0F0] p-4"
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
                className="w-full px-3 text-sm border rounded-md bg-[#F6F0F0] p-4"
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
      <section className="lg:px-[80px]   px-[34px] sm:px-[47px] grid sm:grid-cols-5 grid-cols-2 gap-5 py-10">
        <div className="relative flex justify-center  items-center lg:w-[160px] lg:h-[48px] w-[105px]  md:h-[38px]  h-[30px] ">
          <Image
            src="/image/Page-1.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] ">
          <Image
            src="/image/Logo5.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] ">
          <Image
            src="/image/6.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] ">
          <Image
            src="/image/9.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] ">
          <Image
            src="/image/10.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
      </section>
    </main>
  );
}
