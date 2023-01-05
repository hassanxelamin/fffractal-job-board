/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// import { useFormik } from 'formik';

// interface FormValues {
//   keyword: string;
// }

export function SearchBar() {
  // const formik = useFormik<FormValues>({
  //   initialValues: {
  //     keyword: '',
  //   },
  //   async onSubmit(values: FormValues) {
  //     try {
  //       if (typeof onSubmit === 'function') {
  //         await onSubmit({ variables: { ...values } });
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
  // });

  return (
    <form
      className="font-satoshi lg:flex items-center justify-center 
                     mt-[7.7rem] mb-[7.7rem]"
    >
      <div className="relative">
        <label
          className="absolute left-[19px] top-[15px] 
                     text-[1.1rem] font-bold text-color"
          htmlFor="search"
        >
          What job are you looking for?
        </label>
        <input
          className="h-[93px] w-[353px] sm:w-[550px] md:w-[700px] lg:w-[325px] xl:w-[372px] pt-[35px] pl-[15px]
                     border-solid border-[3px] border-black
                     rounded-tl-2xl rounded-t-2xl text-[36px] border-b-0 lg:border-b-[3px] lg:border-r-0 lg:rounded-r-none lg:rounded-bl-2xl"
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
        />
      </div>

      <div className="relative">
        <label
          className="absolute left-[19px] top-[15px] 
                     text-[11px] font-bold text-color"
          htmlFor="where"
        >
          Where?
        </label>
        <input
          className="h-[93px] w-[353px] sm:w-[550px] md:w-[700px] lg:w-[325px] xl:w-[372px] pt-[35px] pl-[15px]
                     border-solid border-[3px] border-black text-[3.6rem] border-b-0 lg:border-b-[3px]"
          type="text"
          id="where"
          name="where"
          placeholder="Anywhere"
        />
      </div>

      {/* Checkbox */}
      <div
        className="flex items-center justify-center bg-white
                   h-[93px] w-[353px] sm:w-[550px] md:w-[700px] lg:w-[325px] xl:w-[372px]
                   border-[3px] border-solid border-black rounded-b-2xl lg:rounded-l-none lg:border-l-0 lg:rounded-tr-2xl"
      >
        {/* container */}
        <div className="flex flex-col items-end justify-center w-[186px] pr-[10px] mt-[3px]">
          {/* 1 */}
          <div className="text-[2rem] flex items-center justify-between w-[60%]">
            <div>Full-Time</div>
            <input type="checkbox" id="fulltime" name="fulltime" value="type" />
          </div>
          <br />
          {/* 2 */}
          <div className="text-[2rem] flex items-center justify-between w-[60%]">
            <div>Internship</div>
            <input
              type="checkbox"
              id="internship"
              name="internship"
              value="type"
            />
          </div>
          <br />
        </div>

        {/* 3 */}
        <div className="flex flex-col justify-between w-[186px] mt-[3px]">
          <div className="text-[2rem] flex items-center justify-between w-[65%]">
            <div>Part-Time</div>
            <input type="checkbox" id="parttime" name="parttime" value="type" />
          </div>
          <br />

          {/* 4 */}
          <div className="text-[2rem] flex items-center justify-between w-[65%]">
            <div>Contractor</div>
            <input
              type="checkbox"
              id="contractor"
              name="contractor"
              value="type"
            />
          </div>

          {/* end */}
          <br />
        </div>
      </div>
    </form>
  );
}
