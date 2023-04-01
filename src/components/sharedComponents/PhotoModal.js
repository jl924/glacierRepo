import React from "react";
import { useEffect } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setClickedPhoto } from "../../reducers/modalSlice";

const PhotoModal = () => {
  const dispatch = useDispatch();
  const { clickedPhoto } = useSelector((state) => state.modalReducer.photo);

  var close = () => dispatch(setClickedPhoto({ clickedPhoto: "" }));
  var handleClose = (ev) =>
    ev.target && Array.from(ev.target.classList).includes("fixed") && close();

  return (
    clickedPhoto && (
      <div
        className="fixed top-0 w-full h-full p-10 PhotoModal hover:cursor-pointer"
        onClick={handleClose}
      >
        <div className="m-10 PhotoModalContent hover:cursor-default">
          <span className="fixed closePhotoModal ">
            <AiOutlineCloseSquare className="fixed w-[25px] h-[25px] hover:cursor-pointer closePhotoButton top-2 right-2 bg-base-100" />
          </span>
          <img className="" src={clickedPhoto} />
        </div>
      </div>
    )
  );
};

export default PhotoModal;
