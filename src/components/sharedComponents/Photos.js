import React from 'react';
import PhotoModal from './PhotoModal.js';
import {useState} from 'react';
import '../../style.css';

const Photos = ({ photos }) => {

  const [clickedPhoto, setClickedPhoto] = useState('');

  return (
    <div className='py-3 px-5'>
      {photos.map((photoUrl, index) => {
        return (
          <img className='cursor-pointer' key={photoUrl + index} onClick ={(e) => setClickedPhoto(e.target.src)} key='photoUrl' src={photoUrl} width={150} height={150} alt='' />
        );
      })}
      <PhotoModal clickedPhoto={clickedPhoto} setClickedPhoto={setClickedPhoto} />
    </div>
  );
};

export default Photos;