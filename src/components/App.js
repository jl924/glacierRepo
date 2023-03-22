import React from "react";
import Overview from "./Overview.js";
import QuestionsAnswers from "./QuestionsAnswers.js";
import Related from "./Related.js";
import RatingsReviews from "./RatingsReviews";

const App = () => {
  return (
    <div className="app text-primary" data-theme="lightTheme">
      <Overview />
      <Related />
      <QuestionsAnswers />
      <RatingsReviews />
    </div>
  );
};

export default App;
