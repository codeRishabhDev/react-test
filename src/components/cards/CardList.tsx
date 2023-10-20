import React from 'react';

interface CardData {
  description: string;
  title?: string;
}

interface CardListProps {
  data: {
    organizationDetails: CardData[];
    organizationCards: CardData[];
  };
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <section className="my-[100px]">
      <div className="xl:mx-auto xl:px-0 md:px-8 px-4 max-w-[1200px] w-full md:w-[98%]">
        <div className="mt-12 mb-8">
          <h2 className="md:text-[36px] text-[24px] text-black font-bold">
            <span className="bordered-text understand-border">WE</span> CAN ORGANIZE EVERYTHING
          </h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-8 md:gap-0">
          {data.organizationDetails.map((item, index) => (
            <div className="lg:w-1/3 md:w-full lg:mb-0 mb-4 w-50" key={index}>
              <p
                className="text-[18px] text-black leading-loose"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          ))}
        </div>
        <div className="flex mt-8 mb-4 flex-wrap">
          {data.organizationCards.map((item, index) => (
            <div className="lg:w-1/3 md:w-1/2 w-full relative org-card md:pr-[36px] mb-[36px]" key={index}>
              <div className="border-2 border-[#5BC8AF] w-full h-[96px] flex items-center">
                <p className="w-[75%] m-0 gap-2 text-center text-[18px] mx-auto p-4 text-black font-bold flex">
                  {item.title}
                  <img src="images/info.svg" alt="Info" />
                </p>
                <span className="bg-[#297C6B] w-[300px] h-[84px] block text-[13px] text-white p-4 rounded-md mx-auto absolute left-0 right-0 top-[105px] z-50">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardList;