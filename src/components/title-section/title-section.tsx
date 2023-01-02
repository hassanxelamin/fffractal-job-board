import React from 'react';
import TypeIt from 'typeit-react';

export function TitleSection() {
  return (
    <div
      className="font-satoshi font-bold text-center whitespace-nowrap
                 text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px]
                 min-w-[40px] md:w-[1071px] 
                 h-[90px] sm:h-[120px] md:h-[140px] lg:h-[190px] xl:h-[216px] 2xl:h-[216px]"
    >
      <div className="h-[40px] sm:h-[50px] md:h-[65px] lg:h-[85px] xl:h-[100px]">
        Join startups with the best in &nbsp;
      </div>
      <TypeIt
        className="text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px]"
        options={{ speed: 150, loop: true }}
        getBeforeInit={(instance: any) => {
          instance
            .type('Artificial Intelligence', { delay: 2000 })
            .delete(null, { delay: 1000 });
          instance
            .type('Extended Reality', { delay: 2000 })
            .delete(null, { delay: 1000 });
          instance
            .type('Cryptocurrency', { delay: 2000 })
            .delete(null, { delay: 1000 });
          return instance;
        }}
      />
    </div>
  );
}
