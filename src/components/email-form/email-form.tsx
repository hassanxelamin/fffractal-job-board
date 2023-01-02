import React from 'react';

export function EmailForm() {
  return (
    <div className="font-satoshi flex flex-col items-center justify-center">
      <h2
        className="font-bold text-[#727272] 
                   text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]
                   mb-[22px] sm:mb-[24px] md:mb-[26px] lg:mb-[28px] xl:mb-[30px] 2xl:mb-[32px]"
      >
        Receive jobs & newsletters in XR, AI, & Crypto.
      </h2>
      <form action="" className="flex items-center justify-center">
        <input
          placeholder="Type Your Email..."
          className="font-satoshi font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]
                     h-[42px] sm:h-[52px] xl:h-[67px] 2xl:h-[67px]
                     w-[238px] sm:w-[260px] md:w-[280px] lg:w-[320px] 2xl:w-[380px] 
                     p-[20px] mr-[11px] 
                     rounded-[10px] border-solid border-[3px] border-black"
        />
        <button
          type="submit"
          className="flex items-center justify-center text-center 
                     rounded-[50px] border-none 
                     bg-black text-white 
                     font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]
                     h-[42px] sm:h-[52px] xl:h-[67px]
                     w-[90px] sm:w-[123px] xl:w-[250px] 2xl:w-[270px]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
