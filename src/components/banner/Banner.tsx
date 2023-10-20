// src/components/Banner.tsx

import React from 'react';
import ContactForm from '../contactForm/Form';

const Banner: React.FC = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-center">
      <img src="images/banner.png" className="w-full lg:block hidden min-h-[650px]" alt="banner" />
      <img src="images/banner-tab.png" className="w-full lg:hidden md:block hidden h-[1024px]" alt="banner-tab" />
      <img src="images/banner-mobile.png" className="w-full lg:hidden md:hidden block sm:h-[1024px] h-[1200px]" alt="banner-mobile" />

      <div className="absolute top-0 lg:mx-auto left-0 right-0 mx-3 max-w-[1200px]">
        <nav className="">
          <div className=" w-full md:w-[98%]">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed.Menu open: "hidden", Menu closed: "block" */}
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden"*/}
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="images/logo.svg"
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 justify-end">
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a
                        href="#"
                        className="text-white px-3 py-2 text-sm font-bold hover:underline"
                        aria-current="page"
                      >
                        HOME
                      </a>
                      <a
                        href="#"
                        className="text-[#BBCAC7] hover:text-white px-3 py-2 text-sm font-normal hover:underline"
                      >
                        ABOUT
                      </a>
                      <a
                        href="#"
                        className="text-[#BBCAC7] hover:text-white px-3 lg:pr-3 pr-0 py-2 text-sm font-normal hover:underline"
                      >
                        CONTACT
                      </a>
                      <a
                        href="#"
                        className="text-white !ml-12 py-2 text-sm font-bold lg:block hidden"
                      >
                        CALL NOW FOR A CONSULT
                        <span className="text-[#5BC8AF]">123.456.7890</span>
                      </a>
                    </div>
                    <a
                      href="#"
                      className="text-white !ml-12 py-2 text-sm font-bold lg:hidden md:block"
                    >
                      CALL NOW FOR A CONSULT
                      <span className="text-[#5BC8AF]">123.456.7890</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="#"
              className="text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-[#BBCAC7] hover:text-white px-3 py-2 text-sm font-normal hover:underline"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-[#BBCAC7] hover:text-white px-3 py-2 text-sm font-normal hover:underline"
            >
              CONTACT
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              CALL NOW FOR A CONSULT 123.456.7890
            </a>
          </div>
        </div>
        <div className="lg:mx-auto md:mx-3 max-w-[1200px] w-full md:w-[98%] w-full flex lg:gap-24 gap-0 flex-wrap lg:flex-nowrap md:justify-between justify-center">
          <div className="lg:w-[50%] md:w-[75%] w-full md:mx-auto pt-[100px] md:pt-[56px]">
            <h1 className="text-white md:text-[64px] text-[36px] font-bold md:leading-[72px] leading-1 text-center lg:text-left">
              <span className="bordered-text">GET AN</span>
              <br /> INTERVENTION
            </h1>
            <p className="lg:text-sm md:text-[18px] text-[14px] text-white font-light !leading-loose lg:text-left text-center">
              Showing greater respect to older adults can be done in several ways :
              acknowledging and putting to use the talents and skills of older
              adults; creating intergenerational initiatives; and allowing older
              adults to stay active and independent for as long as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Banner;