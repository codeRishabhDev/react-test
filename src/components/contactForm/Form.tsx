// src/components/ContactForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const countries = [
  { label: 'Select a country', value: '' },
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
  { label: 'United Kingdom', value: 'UK' },
  // Add more countries as needed
];

interface ContactFormValues {
  firstName: string;
  lastName: string;
  businessEmail: string;
  company: string;
  country: string;
}

const ContactForm: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      businessEmail: '',
      company: '',
      country: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(`This field can't be empty. Please fill it in.`),
      lastName: Yup.string().required('Last Name is required'),
      businessEmail: Yup.string().email('Invalid email address').required('Business Email is required'),
      company: Yup.string().required('Company Name is required'),
      country: Yup.string().required('Country is required'),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
      navigate('/thank-you');
    },
  });

  const removeKeysExceptFirst = (obj: Record<string, any>) => {
    if (typeof obj !== 'object' || Object.keys(obj).length === 0) {
      return obj;
    }
    const firstKey = Object.keys(obj)[0];
    const result = { [firstKey]: obj[firstKey] };
    return result;
  };

  let errors = removeKeysExceptFirst(formik.errors);

  return (
    <>
      <div className="lg:w-[475px] md:w-[65%] w-full md:mx-auto lg:mt-16 mt-0">
        <div className="box w-full shadow-lg shadow-[#BBCAC7]-500/50 px-7 py-8 h-full bg-gradient-to-b rounded-md from-[#2A7D6C] to-[#3E6960]">
          <strong className="text-white text-[28px] w-full text-center block mb-8">Contact Us</strong>
          <form onSubmit={formik.handleSubmit} className="max-w-md min-w-full mx-auto">
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-3">
              <div className="flex flex-col w-full sm:w-[50%]">
                <div className="mb-4 w-full relative user-input-wrp">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className={`w-full p-2 border outline-none bg-transparent rounded-[2px] text-sm rounded-md px-4 py-3 text-white placeholder-white ${
                      formik.touched.firstName && errors.firstName ? 'border-red placeholder-red' : 'border-white'
                    } ${formik.values.firstName !== '' ? 'custom-class' : ''}`}
                  />
                  <span className="floating-label">First Name</span>
                  {formik.touched.firstName && errors.firstName && (
                    <p className="text-red-500 text-sm mt-1 form-error shadow-lg shadow-[#BBCAC7]-500/50">{errors.firstName}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full sm:w-[50%]">
                <div className="mb-4 w-full relative user-input-wrp">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className={`w-full p-2 border outline-none bg-transparent rounded-[2px] placeholder-white text-sm rounded-md px-4 py-3 text-white ${
                      formik.touched.lastName && errors.lastName ? 'border-red placeholder-red' : 'border-white'
                    } ${formik.values.lastName !== '' ? 'custom-class' : ''}`}
                  />
                  <span className="floating-label">LastName</span>
                  {formik.touched.lastName && errors.lastName && (
                    <p className="text-red-500 text-sm mt-1 form-error shadow-lg shadow-[#BBCAC7]-500/50">{errors.lastName}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-3">
              <div className="flex flex-col w-full sm:w-[50%]">
                <div className="mb-4 w-full relative user-input-wrp">
                  <input
                    id="businessEmail"
                    name="businessEmail"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.businessEmail}
                    className={`w-full p-2 border outline-none bg-transparent rounded-[2px] placeholder-white text-sm rounded-md px-4 py-3 text-white ${
                      formik.touched.businessEmail && errors.businessEmail ? 'border-red placeholder-red' : 'border-white'
                    } ${formik.values.businessEmail !== '' ? 'custom-class' : ''}`}
                  />
                  <span className="floating-label">Email</span>
                  {formik.touched.businessEmail && errors.businessEmail && (
                    <p className="text-red-500 text-sm mt-1 form-error shadow-lg shadow-[#BBCAC7]-500/50">{errors.businessEmail}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full sm:w-[50%]">
                <div className="mb-4 w-full relative user-input-wrp">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.company}
                    className={`w-full p-2 border outline-none bg-transparent rounded-[2px] placeholder-white text-sm rounded-md px-4 py-3 text-white ${
                      formik.touched.company && errors.company ? 'border-red placeholder-red' : 'border-white'
                    } ${formik.values.company !== '' ? 'custom-class' : ''}`}
                  />
                  <span className="floating-label">Company</span>
                  {formik.touched.company && errors.company && (
                    <p className="text-red-500 text-sm mt-1 form-error shadow-lg shadow-[#BBCAC7]-500/50">{errors.company}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4 relative">
              <select
                id="country"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                className={`w-full p-2 border outline-none bg-[#167667] rounded-[2px] text-sm placeholder-white rounded-md px-4 py-3 text-white appearance-none ${
                  formik.touched.country && errors.country ? 'border-red placeholder-red' : 'border-white'
                }`}
              >
                {countries.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formik.touched.country && errors.country && (
                <p className="text-red-500 text-sm mt-1 form-error shadow-lg shadow-[#BBCAC7]-500/50">{errors.country}</p>
              )}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-[220px] shadow-lg shadow-[#BBCAC7]-500/30 hover:shadow-[#BBCAC7]-500/50 text-[18px] flex justify-center font-bold text-white mt-12 p-3 border-[#5BC8AF] bg-[#5BC8AF] rounded-md mx-auto block"
              >
                <img className="mr-2" src="images/send.svg" alt="Send Icon" /> Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;