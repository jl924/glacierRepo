import React, {useState, useEffect} from 'react';

const LoadMoreAnswers = ({handleLoadMoreAnswers}) => {

  return (
    <span className='font-bold px-4'>
      <a onClick={handleLoadMoreAnswers} href=''>Load More Answers</a>
    </span>
  );
};

export default LoadMoreAnswers;