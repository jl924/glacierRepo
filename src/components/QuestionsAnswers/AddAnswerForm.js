import React, {useState,useEffect} from 'react';
import {Formik, Field, Form} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import questionsAnswersSlice from '../../reducers/questionsAnswersSlice.js'
import { apiPostRequest } from "../../helpers/api.js";
import axios from 'axios';

const AddAnswerForm = ({ product, question, setAnswerForm }) => {

  const answeringQuestion = useSelector(state => {
    return state.questionsAnswersReducer.answeringQuestion;
  });

  console.log('ANSWERING QUESTION', answeringQuestion);
  const token = process.env.API_KEY;
  const headers = {
    'Authorization': token
  };

  let [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  var handleAnswerSubmit = (values) => {
    setAnswerForm(false);
    console.log(values);
    console.log('Submit!');
    let newAnswer = {
      body: values.answer,
      name: values.nickname,
      email: values.email,
      photos: []
    };

    if (!loading) {
      setLoading(true);
      axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/answers`, {
        body: values.answer,
        name: values.nickname,
        email: values.email,
        photos: []
      }, {headers})
      .then(response => console.log(response))
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)

      });
      // .then(() => {
      //   dispatch(questionsAnswersSlice.actions.questionsAnswersRequestSuccess())
      // })
    }
  };

  var handlePhotoUpload = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className='text-center font-bold'>Submit Your Answer
        <h2>{product.name}: {answeringQuestion.question_body}</h2>
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
          handleAnswerSubmit(values);
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