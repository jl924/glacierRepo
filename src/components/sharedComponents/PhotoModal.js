import React from 'react';
import {useState} from 'react';
import '../../style.css';
import {AiOutlineCloseSquare} from 'react-icons/ai';

const PhotoModal = ({ clickedPhoto, setClickedPhoto }) => {

  var handleClose = () => {
    setClickedPhoto('');
  };

  return (
    <>
      {clickedPhoto && (
        <div className='PhotoModal'>
          <div className='PhotoModalContent' onClick={handleClose}>
            <span className='closePhotoModal'><AiOutlineCloseSquare className='closePhotoButton cursor-pointer'/></span>
            <img src={clickedPhoto} />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoModal;