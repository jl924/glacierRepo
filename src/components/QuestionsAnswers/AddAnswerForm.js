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

  const token = process.env.API_KEY;
  const headers = {
    'Authorization': token
  };

  let [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [newAnswer, setNewAnswer] = useState({
    body: '',
    name: '',
    email: '',
    photos: []
  });

  var handleAnswerSubmit = () => {
    setAnswerForm(false);
    console.log(newAnswer);
    console.log('Submit!');

    if (!loading) {
      setLoading(true);
      axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/answers`, newAnswer, {headers})
      .then((response) => {
        if (response.status === 201) {
          dispatch(questionsAnswersSlice.actions.addAnswer({ questionId: question.question_id, answer: newAnswer}));
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
      });
    }
  };

  const onAnswerChange = (e) => {
    setNewAnswer(prevState => ({ ...prevState, body: e.target.value }));
  };

  const onNicknameChange = (e) => {
    setNewAnswer(prevState => ({ ...prevState, name: e.target.value }));
  };

  const onEmailChange = (e) => {
    setNewAnswer(prevState => ({ ...prevState, email: e.target.value }));
  };


  var handlePhotoUpload = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className='text-center font-bold'>Submit Your Answer
        <h3>{product.name}: {answeringQuestion.question_body}</h3>
      </h2>
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
          handleAnswerSubmit();
        }, 400);
      }}
      >
        <Form>
          <h2 className='py-20 flex h-full flex-col justify-end'>
            <label className='label' htmlFor='answer'>
              <span className='label-text flex flex-row justify-center w-full text-lg'>Answer:</span>
            </label>
            <textarea onChange={onAnswerChange} className='textarea rounded-none textarea-primary h-20 bg-base-300' id='answer' name='answer' />
          </h2>

          <h2 className='py-5 text-center'>
            <label className='label'htmlFor='nickname'>
              <span className='label-text flex flex-row justify-center w-full text-lg'>Nickname:</span>
            </label>
            <input onChange={onNicknameChange} className='input rounded-none input-primary bg-base-300' id='nickname' name='nickname' placeholder='Example: jack543!' />
            <p><small>For privacy reasons, do not use your full name or email address.</small></p>
          </h2>

          <h2 p className='py-5 text-center'>
            <label className='label' htmlFor='email'>
              <span className='label-text flex flex-row justify-center w-full text-lg'>Email:</span>
            </label>
            <input onChange={onEmailChange} className='input rounded-none input-primary bg-base-300' id='email' name='email' type='email' placeholder='Example: jack@email.com' />
            <p p className='py-1'><small>For authentication reasons, you will not be emailed.</small></p>
          </h2>
          <div className='text-center'>
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