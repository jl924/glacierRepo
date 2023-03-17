import React from "react";
import Overview from "./Overview.js";
import RatingsReviews from "./RatingsReviews.js";
import QuestionsAnswers from "./QuestionsAnswers.js";
import Related from "./Related.js";

const App = () => {
  return (
    <div data-theme="lightTheme" className='color-primary'>
      <Overview />
      <Related />
      <QuestionsAnswers />
      <RatingsReviews />
    </div>
  );
};

export default App;
