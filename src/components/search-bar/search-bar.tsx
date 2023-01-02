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
    <form className="bg-white opacity-50 overflow-hidden flex items-center justify-center mt-[7.7rem] mb-[7.7rem]">
      <div className="relative">
        <label
          className="absolute left-[19px] top-[15px] text-[1.1rem] bold text-color"
          htmlFor="search"
        >
          What job are you looking for?
        </label>
        <input
          className="h-[93px] border-[1px] border-solid border-black rounded-tl-2xl rounded-bl-2xl w-[372px] text-[36px] pt-[35px] pl-[15px]"
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
        />
      </div>

      <div className="relative">
        <label
          className="absolute left-[19px] top-[15px] text-[11px] bold text-color"
          htmlFor="where"
        >
          Where?
        </label>
        <input
          className="h-[93px] border-[1px] border-solid border-black w-[37.2rem] text-[3.6rem] pt-[35px] pl-[15px]"
          type="text"
          id="where"
          name="where"
          placeholder="Anywhere"
        />
      </div>

      <div className="flex justify-center items-center h-[93px] w-[372px] border-[1px] border-solid border-black rounded-tr-2xl rounded-br-2xl">
        <div className="pl-[48px] pt-[20px]">
          <div className="text-[2rem]">
            <label htmlFor="fulltime">
              Full-Time
              <input
                type="checkbox"
                id="fulltime"
                name="fulltime"
                value="type"
              />
            </label>
          </div>
          <br />

          <div className="text-[2rem]">
            <label htmlFor="internship">
              Internship
              <input
                type="checkbox"
                id="internship"
                name="internship"
                value="type"
              />
            </label>
          </div>
          <br />
        </div>

        <div className="pl-[2.4rem] pt-[2rem]">
          <div className="text-[2rem]">
            <label htmlFor="parttime">
              Part-Time
              <input
                type="checkbox"
                id="parttime"
                name="parttime"
                value="type"
              />
            </label>
          </div>
          <br />

          <div className="text-[2rem]">
            <label htmlFor="contractor">
              Contractor
              <input
                type="checkbox"
                id="contractor"
                name="contractor"
                value="type"
              />
            </label>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
}
