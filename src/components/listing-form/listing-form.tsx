/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

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
  userId: string;
}

export const ListingForm = (props: MyFormProps) => {
  const router = useRouter();

  const { redirectPath, onSubmit, userId } = props;

  const editorRef = useRef<TinyMCEEditor | null>(null);

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
      let toastId;
      try {
        toastId = toast.loading('Submitting...');
        // Submit data
        if (typeof onSubmit === 'function') {
          await onSubmit({ variables: { ...values, userId } });
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

  return (
    <div className="font-satoshi flex items-center justify-center w-full text-black text-[14px]">
      <div className="w-[800px] flex flex-col justify-center">
        <div className="text-[36px] mb-[32px]">
          <h1>
            <span className="font-bold">Hire the best.</span> Share your job
            post with thousands of job seekers.
          </h1>
        </div>

        <div>
          <h2 className="text-[20px] font-bold mb-[5px]">Company Details.</h2>
          <p className="text-[16px]">
            We will automatically create a company profile with all your job
            listings.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex gap-x-6 mt-[32px] mb-[32px]">
            <div>
              <label htmlFor="company-name">
                <span className="font-bold">Company Name</span>
                <input
                  name="company"
                  className="text-black text-center w-[392px] h-[38px] border-[2px] border-solid border-black rounded"
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
                <span className="font-bold">Website</span>
                <input
                  name="website"
                  className="text-black text-center w-[392px] h-[38px] border-[2px] border-solid border-black rounded"
                  id="website"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.website}
                />
              </label>
            </div>
          </div>

          <div className="mt-[32px] mb-[32px]">
            <h2 className="text-[20px] mb-[5px] font-bold">Job Details.</h2>
            <p className="text-[16px]">
              Please be as detailed as possible describing the job opening.
            </p>
          </div>

          <div className="flex gap-x-6 ">
            <div>
              <label htmlFor="job-title">
                <span className="font-bold">Job Title</span>
                <input
                  name="title"
                  className="text-black text-center w-[528px] h-[38px] border-[2px] border-solid border-black rounded"
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
                <span className="font-bold">Commitment</span>
                <select
                  name="commitment"
                  id="commitment"
                  className="text-[16px] w-[256px] h-[38px] border-[2px] border-black rounded-[3px] outline-none"
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

          <div className="flex gap-x-6 items-center mt-[32px] mb-[32px]">
            <div>
              <label htmlFor="primary-location">
                <span className="font-bold">Primary Location</span>
                <input
                  name="location"
                  className="text-black text-center w-[528px] h-[38px] border-[2px] border-solid border-black rounded"
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
                <span className="font-bold">Employees may work remotely</span>
              </label>
            </div>
          </div>

          <div className="flex gap-x-6 items-center mt-[32px] mb-[32px]">
            <div>
              <label htmlFor="urlOrEmail">
                <span className="font-bold">
                  Application URL or Public Email
                </span>
                <input
                  name="urlOrEmail"
                  className="text-black text-center w-[800px] h-[38px] border-[2px] border-solid border-black rounded"
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
                <span className="font-bold">Job Description</span>
              </label>
              <Editor
                onInit={(evt, editor) => {
                  editorRef.current = editor;
                }}
                initialValue=""
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  advlist_bullet_styles: 'square',
                  toolbar:
                    'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style:
                    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }',
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                onEditorChange={(e) => {
                  formik.handleChange({
                    target: { name: 'description', value: e },
                  });
                }}
              />
            </div>
          </div>

          <div className="mt-[32px] mb-[32px] font-bold text-white">
            <button
              type="submit"
              className="flex items-center text-white w-[123px] bg-[#000] flex items-center justify-center text-center h-[42px] rounded-[50px] font-bold text-[1.2rem] border-none w-[123px]"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
