import React, {useState,useEffect} from 'react';
import {Formik, Field, Form} from 'formik';

const AddAnswerForm = () => {

  var handleAnswerSubmit = () => {

  };

  return (
    <div>
      <h1>Submit Your Answer
        <h2>Product Name: Question Body.</h2>
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
        <Form>
        <p>
            <label htmlFor='answer'>Your Answer: </label>
            <Field id='answer' name='answer' />
          </p>

          <p>
            <label htmlFor='nickname'>Nickname: </label>
            <Field id='nickname' name='nickname' placeholder='Example: jack543!' />
            <p><small>For privacy reasons, do not use your full name or email address.</small></p>
          </p>

          <p>
            <label htmlFor='email'>Email: </label>
            <Field id='email' name='email' type='email' placeholder='Example: jack@email.com' />
            <p><small>For authentication reasons, you will not be emailed.</small></p>
          </p>
          <div>
            <p>
              <button>Upload Photos</button>
            </p>
            <button>Submit</button>
          </div>

        </Form>
      </Formik>
    </div>
  );
};

export default AddAnswerForm;