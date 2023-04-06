import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Roadmap() {
  const items = [
    {
      title: 'Phase 1',
      Content: () => (
        <div>
          Stealth Release of Relics
          <br />
          Community Creation
          <br />
          Game Development
        </div>
      ),
    },

    {
      title: 'Phase 2',
      Content: () => (
        <div>
          Reveal Traits/Abilities for Viking, Samurai, or Gladiator Warrior
          <br />
          Burn Relic for Warrior NFT
          <br />
          Staking Begins for Relic Token - Liquidity Pool Creation
          <br />
          (DOCS contains plans following Phase 2)
        </div>
      ),
    },

    {
      title: 'Phase 3',
      Content: () => (
        <div>
          Battleground Game Beta Launches
          <br />
          Marketplace Released
          <br />
          Airdrop of 1/33 Creatures to Legendary Relic Holders
        </div>
      ),
    },
  ];

  return (
    // <div>
    //   {items.map(({ title, Content }, index) => {
    //     return (
    //       <div className='flex text-white gap-20 mt-10' key={index}>
    //         <p className='text-primary font-bold text-xl font-life'>
    //           {title}
    //         </p>
    //         <div>
    //           <Content />
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    <div className='mt-10'>
      <VerticalTimeline layout='2-columns' lineColor='rgb(0 194 255)'>
        {items.map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              dateClassName='ml-10'
              iconClassName='bg-black h-5 w-5'
              // textClassName='bg-yellow-400'
              contentArrowStyle={{ display: 'none' }}
              contentStyle={{
                backgroundColor: 'transparent',
                padding: 0,
                boxShadow: 'none',
              }}
            >
              <div className='text-white z-40 border-[1px] border-orange-500 p-4 rounded-lg '>
                <h3 className='font-bold text-primary text-3xl font-life italic uppercase'>
                  {item.title}
                </h3>
                <div className='text-sm text-gray-300 mt-2'>
                  <item.Content />
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
