import React from 'react';
import Overview from './Overview.js';
import RatingsReviews from './RatingsReviews.js';
import QuestionsAnswers from './QuestionsAnswers.js';
import Related from './Related.js';
import '../style.css';

const App = () => {
  return (
    <div className='badge'>
      <span className='badge'>Text</span>
      <Overview />
      <Related />
      <QuestionsAnswers />
      <RatingsReviews />
    </div>
  )
}

export default App;
