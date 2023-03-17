import React from 'react';

const Answer = ({answers, HelpfulStatus}) => {
  let answerId = Object.keys(answers);

  return (
    <div>
      <h4>
        {answerId.map((id) => {
          return (
            <div key={id} className='container mx-auto px-10 py-4'>
              <p>A: {answers[id].body}</p>
              <HelpfulStatus />
            </div>
          );
        })}
        </h4>
    </div>
  );
};

export default Answer;