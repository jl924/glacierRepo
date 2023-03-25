import React from "react";
import Overview from "./Overview.js";
import QuestionsAnswers from "./QuestionsAnswers.js";
import Related from "./Related.js";
import RatingsReviews from "./RatingsReviews";
import { useEffect } from 'react'


const App = () => {

  const trackClick = (payload) => {
    //console.log(payload)
  };

  useEffect(() => {
    function handleTracking(event) {
      let element = event.target.name;
      let time = Date.now();
      let module = "";
      let parent = event.target.parentNode;

      while(parent) {
        const attributes = parent.attributes;
        if (attributes && attributes.module) {
          module = attributes.module.value;
          break;
        }
        parent = parent.parentNode;
      }
      trackClick({ element, time, module });
    }

    window.addEventListener("click", handleTracking);

    return () => {
      window.removeEventListener("click", handleTracking);
    };
  }, []);

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
