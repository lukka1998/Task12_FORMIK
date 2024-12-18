import React from 'react';
import classNames from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const validate = (values) => {
  const errors = {};
  

  if (!values.firstName) {
    errors.firstName = 'First Name cannot be empty';

  }

  if (!values.lastName) {
    errors.lastName = 'Last Name cannot be empty';

  }

  if (!values.email) {
    errors.email = 'Looks like this is not an email';

  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Invalid email address';

  }

  if (!values.password) {
    errors.password = 'Password cannot be empty';
    bolean=true

  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/.test(values.password)) {
    errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
  }

  return errors;
};

function RightSide() {

  return (
    <div className='flex flex-col w-[540px] justify-center items-center gap-4 '>
      <div className='  px-5 py-5 flex justify-center items-center w-[540px] h-16 flex-shrink-0 rounded-xl bg-purple-600 shadow-lg shadow-black/15 text-white text-center font-sans text-xs font-bold leading-relaxed tracking-wider'>Try it free 7 days <span className='text-white font-sans text-xs font-normal leading-relaxed tracking-wider'>then  $20/mo. thereafter</span></div>

      <div className='flex flex-col w-[540px] h-[auto] bg-white justify-center items-center py-10 px-5 rounded-xl  shadow-lg shadow-black/15'>

        <Formik className="flex flex-col gap-3"
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values) => {
            console.log(values);
          } }
        >
          <Form className='flex flex-col gap-3 '>
            <Field className="w-[460px] h-14 flex-shrink-0 rounded-md border border-purple-600 bg-white  py-4 px-4 " name="firstName" placeholder="First Name" />
            <ErrorMessage name="firstName" component="div" className=' text-red-500 flex justify-end ' />

            <Field className="w-[460px] h-14 flex-shrink-0 rounded-md border border-purple-600 bg-white  py-4 px-4 " name="lastName" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="div" className=' text-red-500 flex justify-end' />

            <Field className="w-[460px] h-14 flex-shrink-0 rounded-md border border-purple-600 bg-white  py-4 px-4 " name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className=' text-red-500 flex justify-end' />

            <Field className="w-[460px] h-14 flex-shrink-0 rounded-md border border-purple-600 bg-white  py-4 px-4 " name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className=' text-red-500 flex justify-end' />

            <button className=' text-white font-sans text-xs font-semibold leading-relaxed tracking-widest  w-[460px] h-16 flex-shrink-0 rounded-md bg-green-500 shadow-sm shadow-green-500/20' type="submit">CLAIM YOUR FREE TRIAL</button>
            <p className='text-gray-400 text-center font-sans text-xs font-medium leading-relaxed'>By clicking the button, you are agreeing to our <span className='text-red-500 font-sans text-xs font-bold leading-relaxed'>Terms and Services</span></p>
          </Form>
        </Formik>
      </div>
    </div>

  );
}

export default RightSide;