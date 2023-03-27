import React from "react";
import Overview from "./Overview.js";
import QuestionsAnswers from "./QuestionsAnswers.js";
import Related from "./Related.js";
import RatingsReviews from "./RatingsReviews";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addClick } from '../reducers/clickSlice'

const App = () => {

  const dispatch = useDispatch();

  const trackClick = (payload) => {
    dispatch(addClick(payload))
  };

  const clickObject = useSelector((state) => state.clickReducer.clicks)


  // Add this to any element you would like to be tracked
  // Format  - module="<eventName>|<yourModule>" (ex. <div module="styleBtn|Overview">)

  // uncomment to test clicks -> logs click count object
  //console.log(clickObject)

  useEffect(() => {
    function handleTracking(event) {
      let ElementModule = null;
      let element = '';
      let module = '';
      let time = Date.now();
      if(event.target.attributes.module) {
        ElementModule = event.target.attributes.module.value
      }
      let parent = event.target.parentNode;
      while(parent) {
        const attributes = parent.attributes;
        if (attributes && attributes.module && ElementModule===null) {
          ElementModule = attributes.module.value;
          break;
        }
        parent = parent.parentNode;
      }
      if(ElementModule) {
        let EM = ElementModule.split('|')
        element = EM[0]
        module = EM[1]
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
