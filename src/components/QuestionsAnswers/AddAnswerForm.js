import React, {useState,useEffect} from 'react';
import {Formik, Field, Form} from 'formik';

const AddAnswerForm = ({ product, question }) => {

  var handleAnswerSubmit = () => {

  };

  var handlePhotoUpload = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className='text-center font-bold'>Submit Your Answer
        <h2>{product.name}: {question}</h2>
      </h1>
      <Formik
      initialValues={{
        answer:'',
        nickname: '',
        email: '',
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      >
        <Form className='px-3'>
          <p className='py-5'>
            <label htmlFor='answer'>Your Answer: </label>
            <Field id='answer' name='answer' />
          </p>

          <p className='py-5'>
            <label htmlFor='nickname'>Nickname: </label>
            <Field id='nickname' name='nickname' placeholder='Example: jack543!' />
            <p><small>For privacy reasons, do not use your full name or email address.</small></p>
          </p>

          <p p className='py-5'>
            <label htmlFor='email'>Email: </label>
            <Field id='email' name='email' type='email' placeholder='Example: jack@email.com' />
            <p p className='py-1'><small>For authentication reasons, you will not be emailed.</small></p>
          </p>
          <div>
            <p p className='py-2'>
              <button onClick={handlePhotoUpload}>Upload Photos</button>
            </p>
            <button>Submit</button>
          </div>

        </Form>
      </Formik>
    </div>
  );
};

export default AddAnswerForm;