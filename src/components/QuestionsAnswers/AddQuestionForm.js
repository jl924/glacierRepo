import React, {useState,useEffect} from 'react';
import {Formik, Field, Form} from 'formik';

const AddQuestionForm = ({ product }) => {

  var handleSubmitQuestion = () => {
    console.log('Submit!');
  };

  return (
    <div>
      <h1 className='text-center font-bold'>Ask a question
        <h2>About the {product.name}</h2>
      </h1>
      <Formik
      initialValues={{
        question:'',
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
            <label htmlFor='question'>Your Question: </label>
            <Field id='question' name='question' />
          </p>

          <p className='py-5'>
            <label htmlFor='nickname'>Nickname: </label>
            <Field id='nickname' name='nickname' placeholder='Example: jackson11!' />
            <p><small>For privacy reasons, do not use your full name or email address.</small></p>
          </p>

          <p className='py-5'>
            <label htmlFor='email'>Email: </label>
            <Field id='email' name='email' type='email' placeholder='Why did you like the product or not?' />
            <p className='py-1'><small>For authentication reasons, you will not be emailed.</small></p>
          </p>

          <button>Submit</button>

        </Form>
      </Formik>
    </div>
  );
};

export default AddQuestionForm;