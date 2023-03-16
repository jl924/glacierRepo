import React from 'react';
import RatingsDistributionGraph from './RatingsReviews/RatingsDistributionGraph.js';
import ReviewList from './RatingsReviews/ReviewList.js';
import '../styles/RatingsReviews.sass';

const RatingsReviews = () => {
  return (
    <div className='columns-2 gap-20 lg:container mx-auto'>
      <div className='left 25% flex flex-col'>
        <h4>Ratings & Reviews</h4>
        <div>
          <h1>3.5</h1>
          <div className='starComponent'>*****</div>
        </div>
        <RatingsDistributionGraph />
        <div>
          <span>Comfort</span>
          <div>Slider Component</div>
          <div>
            <span>Poor</span>
            <span>Perfect</span>
          </div>
        </div>
      </div>
      <div className='right 75% flex flex-col'>
        <div className='header'>
          <h3>248 Reviews, sorted by <select ><option value='relevance'>relevance</option></select></h3>
        </div>
        <ReviewList />
      </div>
    </div>
  );
}

export default RatingsReviews;