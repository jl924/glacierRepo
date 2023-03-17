import React from 'react';
import Answer from './Answer.js';
import exampleData from '../../exampleData/questionsForOneProduct.json';
import HelpfulStatus from '../sharedComponents/HelpfulStatus.js';

// Question component to house:
// Answer and HelpfulStatus components
const Question = () => {
let question = exampleData.results[0];

  return (
    <div>
      <h3>Q: {question.question_body}<span className='float-right'><HelpfulStatus /></span></h3>
      <Answer answers={question.answers} HelpfulStatus={HelpfulStatus}/>
    </div>
  );

};

export default Question;