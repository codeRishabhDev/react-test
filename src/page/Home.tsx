// src/components/Home

import React from 'react';
import VideoPlayer from '../components/videoPlayer/videoPlayer';
import CardList from '../components/cards/CardList';
import {TestimonialCarousel} from '../components/testimonialCarousel/TestimonialCarousel';
import Banner from '../components/banner/Banner';
import data from '../utils/data.json';

const Home: React.FC = () => {
  return (
    <>
    <Banner />
   
    {/* we UNDERSTAND section */}
    <section className="md:bg-[#F5F5F5] bg-white md:py-12 py-0 mt-[-1px]">
      <div className="xl:mx-auto xl:px-0 md:px-8 px-4 max-w-[1200px] pb-24 w-full">
        <div className="flex gap-8 md:flex hidden">
          <div className="w-1/3">
            <img src="images/UNDERSTAND1.png" className="w-full rounded-md" alt="UNDERSTAND1" />
          </div>
          <div className="w-1/3">
            <img src="images/UNDERSTAND2.png" className="w-full rounded-md" alt="UNDERSTAND2" />
          </div>
          <div className="w-1/3">
            <img src="images/UNDERSTAND3.png" className="w-full rounded-md" alt="UNDERSTAND3" />
          </div>
        </div>
        <div className="md:mt-12 mt-0 mb-8">
          <h2 className="md:text-[36px] text-[24px] text-black heavy-font  font-extrabold">
            <span className="bordered-text understand-border ">WE </span>
            UNDERSTAND
          </h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-8 md:gap-0">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full lg:px-0 understand-wrapper">

            {data.weUnderstandDetails.map((item, index) => (
              <>
                <p className="text-sm text-black leading-loose UNDERSTAND-detail" key="index">
                  {item.description}
                  {item.button &&
                    <button className="bg-[#5BC8AF] secondary-btn  h-[50px]  w-[97%] flex p-3 justify-center font-bold text-[18px] items-center gap-2 mt-4 rounded-md border-2 border-[#5BC8AF] bg-transparent text-[#5BC8AF]">
                      92% Success Rate
                      <img src="images/Arrow.svg" alt="Arrow" />
                    </button>}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* we user testimonial section */}
    <div className='md:mt-[-40px] mt-0 w-full'>
      <section className="mx-auto w-[250px] sm:w-[350px] md:w-[650px] lg:w-[950px] xl:w-[95%]">
        <div className="lg:mx-auto max-w-[1200px] w-full md:w-[98%]">
          <TestimonialCarousel name={''} description={''} img={''} />
        </div>
      </section>
    </div>

    {/* we can ORGANIZE section */}
    <CardList data={data} />

    {/* watch video section */}
    <section className="bg-gradient-to-r from-[#153F38] to-[#305D52] block">
      <div className="w-full md:w-full max-w-[1440px] lg:flex block lg:mx-auto">
        <div className=" xl:ml-auto xl:mr-0 xl:pl-24 md:pl-8 pl-4 lg:w-[50%] md:w-full xl:ml-[120px] py-[90px]">
          <div className="">
            <h2 className="md:text-[44px] text-[36px] text-white font-bold mb-8 lg:text-left md:text-center">
              <span className="bordered-text">WATCH</span> THE VIDEO
            </h2>
          </div>
          <div className="flex items-baseline gap-4 mb-4">
            <img src="images/Checkmark.svg" alt="Checkmark" />
            <div>
              <strong className="text-[24px] font-bold text-white">
                Needs Assessment
              </strong>
              <p className="text-[18px] text-[#D3DCDA] leading-loose pt-4 w-[80%]">
                The Advocacy Evaluation Toolkit contains the instruments used to
                collect data for evaluating the Consumer Voices for Coverage
                program.{" "}
              </p>
            </div>
          </div>
          <div className="flex items-baseline gap-4 mb-4">
            <img src="images/Checkmark.svg" alt="Checkmark" />
            <div>
              <strong className="text-[24px] font-bold text-white">
                Insurance Advocacy
              </strong>
              <p className="text-[18px] text-[#D3DCDA] leading-loose pt-4 w-[80%]">
                We are committed to advocating for appropriate coverage and
                payment policies.{" "}
              </p>
            </div>
          </div>
          <div className="flex items-baseline gap-4 mb-4">
            <img src="images/Checkmark.svg" alt="Checkmark" />
            <div>
              <strong className="sm:text-[24px] text-[18px] font-bold text-white">
                Treatment Planning &amp; Placement
              </strong>
              <p className="text-[18px] text-[#D3DCDA] leading-loose pt-4 w-[80%]">
                Patients can better understand medical procedures, discharge
                instructions, etc.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] md:w-full relative">
          <img src="images/watch-video.png" className="h-full lg:block hidden" alt="watch-video" />
          <img
            src="images/watchvideo-tab.png"
            className="h-full lg:hidden block w-full"
          />
          <img
            src="images/play.png"
            className="absolute left-0 md:w-[200px] w-[100px] right-0 mx-auto lg:top-[40%] top-[-5%]"
            alt="play"
          />
          <img
            src="images/logo.svg"
            className="absolute bottom-[35px] right-[35px]"
            alt="logo"
          />
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-r from-[#153F38] to-[#305D52] block">
      <div className="xl:ml-auto xl:mr-0 xl:pl-0 md:pl-6 pl-4 w-full md:w-full max-w-[1440px] lg:flex block !mx-auto">
        <div className=" xl:ml-auto xl:mr-0 xl:pl-24 md:pl-8 pl-4 lg:w-[50%] md:w-full xl:ml-[120px] ml-3 py-[90px]">
          <div className="">
            <h2 className="md:text-[44px] text-[36px] text-white font-bold mb-8 lg:text-left md:text-center">
              <span className="bordered-text">WATCH</span> THE VIDEO
            </h2>
          </div>
          <div className="flex items-baseline gap-4 mb-4">
            <img src="images/Checkmark.svg" alt="Checkmark" />
            <div>
              <strong className="text-[24px] font-bold text-white">
                Needs Assessment
              </strong>
              <p className="text-[18px] text-[#D3DCDA] leading-loose pt-4 w-[80%]">
                The Advocacy Evaluation Toolkit contains the instruments used to
                collect data for evaluating the Consumer Voices for Coverage
                program.{" "}
              </p>
            </div>
          </div>
          <div className="flex items-baseline gap-4 mb-4">
            <img src="images/Checkmark.svg" alt="Checkmark" />
            <div>
              <strong className="text-[24px] font-bold text-white">
                Insurance Advocacy
              </strong>
              <p className="text-[18px] text-[#D3DCDA] leading-loose pt-4 w-[80%]">
                We are committed to advocating for appropriate coverage and
                payment policies.{" "}
              </p>
            </div>
          </div>
          <div className="flex items-baseline gap-4 mb-4">
            <img src="images/Checkmark.svg" alt="Checkmark" />
            <div>
              <strong className="sm:text-[24px] text-[18px]  font-bold text-white">
                Treatment Planning &amp; Placement
              </strong>
              <p className="text-[18px] text-[#D3DCDA] leading-loose pt-4 w-[80%]">
                Patients can better understand medical procedures, discharge
                instructions, etc.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] md:w-full relative items-center flex pr-5 lg:pl-5 pl-0 pb-5">
          <VideoPlayer />
        </div>
      </div>
    </section>
    
  </>
  );
};

export default Home;