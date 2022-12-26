/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { Tiptap } from 'src/components';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TrixEditor } from 'react-trix';
// import { EditorContent, useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';

const ListingSchema = Yup.object().shape({
  company: Yup.string().trim().required(),
  website: Yup.string().trim().required(),
  title: Yup.string().trim().required(),
  commitment: Yup.string().trim().required(),
  location: Yup.string().trim().required(),
  remote: Yup.boolean().required(),
  urlOrEmail: Yup.string().trim().required(),
  description: Yup.string().trim().required(),
});

interface FormValues {
  company: string;
  website: string;
  title: string;
  commitment: string;
  location: string;
  remote: boolean;
  urlOrEmail: string;
  description: string;
}

interface MyFormProps {
  redirectPath: string;
  onSubmit: (data: any) => {};
}

export const ListingForm = (props: MyFormProps) => {
  const router = useRouter();

  const { redirectPath, onSubmit } = props;

  const formik = useFormik<FormValues>({
    initialValues: {
      company: '',
      website: '',
      title: '',
      commitment: '',
      location: '',
      remote: false,
      urlOrEmail: '',
      description: '',
    },
    async onSubmit(values: FormValues) {
      console.log(values);
      let toastId;
      try {
        toastId = toast.loading('Submitting...');
        // Submit data
        if (typeof onSubmit === 'function') {
          await onSubmit({ ...values });
        }
        toast.success('Successfully submitted', { id: toastId });
        // Redirect user
        if (redirectPath) {
          router.push(redirectPath);
        }
      } catch (e) {
        toast.error('Unable to submit', { id: toastId });
      }
    },
  });

  // const editor = useEditor({
  //   extensions: [StarterKit],
  //   editorProps: {
  //     attributes: {
  //       class: 'border-solid border-[3px] width-[800px] h-[330px]',
  //     },
  //   },
  //   onUpdate: ({ editor }) => {
  //     const json = editor.getText();
  //     // console.log(json);
  //     formik.values.urlOrEmail = json;
  //     // send the content to an API here
  //   },
  //   content: `
  //     <h2>
  //       Hi there,
  //     </h2>
  //   `,
  // });

  let mergeTags = [
    {
      trigger: "@",
      tags: [
        { name: "Dominic St-Pierre", tag: "@dominic" },
        { name: "John Doe", tag: "@john" }
      ]
    },
    {
      trigger: "{",
      tags: [
        { name: "First name", tag: "{{ .FirstName }}" },
        { name: "Last name", tag: "{{ .LastName }}" }
      ]
    }
  ];

  return (
    <div className="font-satoshi flex items-center justify-center w-full text-black">
      <div className="w-[800px] flex flex-col justify-center">
        <div className="text-[36px]">
          <h1>
            Hire the best. Share your job post with thousands of job seekers.
          </h1>
        </div>

        <div>
          <h2 className="text-[20px]">Company Details.</h2>
          <p className="text-[16px]">
            We will automatically create a company profile with all your job
            listings.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex gap-x-6">
            <div>
              <label htmlFor="company-name">
                Company Name
                <input
                  name="company"
                  className="text-black text-center w-[392px] h-[38px] border-[1px] border-solid border-black rounded"
                  id="company-name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.company}
                />
              </label>
            </div>

            <div>
              <label htmlFor="website">
                Website
                <input
                  name="website"
                  className="text-black text-center w-[392px] h-[38px] border-[1px] border-solid border-black rounded"
                  id="website"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.website}
                />
              </label>
            </div>
          </div>

          <div>
            <h2 className="text-[20px]">Job Details.</h2>
            <p className="text-[16px]">
              Please be as detailed as possible describing the job opening.
            </p>
          </div>

          <div className="flex gap-x-6">
            <div>
              <label htmlFor="job-title">
                Job Title
                <input
                  name="title"
                  className="text-black text-center w-[528px] h-[38px] border-[1px] border-solid border-black rounded"
                  id="job-title"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                />
              </label>
            </div>

            <div>
              <label htmlFor="commitment">
                Commitment
                <select
                  name="commitment"
                  id="commitment"
                  className="text-[16px] w-[256px] h-[38px] border-[1px] border-black rounded-[3px] outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.commitment}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contractor">Contractor</option>
                </select>
              </label>
            </div>
          </div>

          <div className="flex gap-x-6 items-center">
            <div>
              <label htmlFor="primary-location">
                Primary Location
                <input
                  name="location"
                  className="text-black text-center w-[528px] h-[38px] border-[1px] border-solid border-black rounded"
                  id="primary-location"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                />
              </label>
            </div>

            <div className="w-[256px] flex items-center">
              <label htmlFor="remote" className="flex items-center text-[14px]">
                <input
                  id="remote"
                  name="remote"
                  type="checkbox"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.remote}
                />
                Employees may work remotely
              </label>
            </div>
          </div>

          <div className="flex gap-x-6 items-center">
            <div>
              <label htmlFor="urlOrEmail">
                Application URL or Public Email
                <input
                  name="urlOrEmail"
                  className="text-black text-center w-[800px] h-[38px] border-[1px] border-solid border-black rounded"
                  id="urlOrEmail"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.urlOrEmail}
                />
              </label>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="description">
                Job Description
                {/* <EditorContent
                  editor={editor}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                /> */}
                <TrixEditor
                  mergeTags={mergeTags}
                  placeholder="editor's placeholder"
                  value="initial content <strong>for the editor</strong>"
                />
              </label>
            </div>
          </div>

          <div>
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};
