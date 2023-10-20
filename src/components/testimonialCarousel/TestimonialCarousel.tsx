import React from 'react';
import Carousel from 'nuka-carousel';

interface TestimonialSlide {
  name: string;
  description: string;
  img: string;
  // showArrows: boolean;
  // emulateTouch: boolean;
}

export function TestimonialCarousel(props: TestimonialSlide) {
  const slidesData: TestimonialSlide[] = [
    {
      name: 'Abbie Harvey',
      description:
        'I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love, and care that they truly deserve.',
      img: 'images/user.png',
    },
    {
      name: 'Abbie Harvey',
      description:
        'I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love, and care that they truly deserve.',
      img: 'images/user.png',
    },
  ];

  return (
    <Carousel
      // showArrows={props.showArrows}
      // emulateTouch={props.emulateTouch}
      autoplay={true}
      cellAlign='center'
      wrapAround={true}
      renderCenterLeftControls={({ previousSlide }) => (
        <button className='left-[-65px] relative hidden md:flex' onClick={previousSlide}>
          <img src='images/arrow-left.svg' alt='Previous Slide' />
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button className='right-[-55px] relative hidden md:flex' onClick={nextSlide}>
          <img src='images/arrow-right.svg' alt='Next Slide' />
        </button>
      )}
    >
      {slidesData.map((item, i) => (
        <div className='md:pt-0 pt-[60px]' key={i}>
          <div className='mx-auto w-full flex md:flex-row flex-col gap-8 md:bg-transparent bg-[#194D44]'>
            <div className='md:w-[25%] w-full'>
              <img
                src={item.img}
                alt={item.name}
                className='w-full shadow-lg shadow-[#BBCAC7]-500/50 md:w-full sm:w-[250px] xs:w-[200px] w-[100px] md:mt-[0] mt-[-40px] ml-[50px] md:ml-0'
              />
            </div>
            <div className='md:w-[75%] w-[90%] mx-auto relative'>
              <div className='w-full rounded-r-lg block md:p-10 p-5 h-full bg-[#194D44] shadow-lg shadow-[#BBCAC7]-500/50'>
                <strong className='text-[24px] font-bold text-white'>{item.name}</strong>
                <p className='text-[18px] font-light text-white mt-3 italic w-[90%]'>{item.description}</p>
              </div>
              <img
                src='images/“.svg'
                alt='Placeholder'
                className='absolute md:top-[40px] sm:top-[-100px] top-[-70px] md:w-[50px] sm:w-[100px] w-[50px] sm:right-[80px] right-[50px]'
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
