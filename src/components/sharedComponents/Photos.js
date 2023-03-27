import React from 'react';

const Photos = ({photos}) => {

  return (
    <div className='photos'>
      {photos.map((photoUrl) => {
        return (
          <img src={photoUrl} width={150} height={150} alt='' />
        );
      })}

    </div>
  );
};

export default Photos;