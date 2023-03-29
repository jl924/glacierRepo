import React from "react";
import { useEffect } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setSupportMessage, setSupportShown } from "../../reducers/modalSlice";

const SupportModal = () => {
  const dispatch = useDispatch();
  const { message, isShown } = useSelector(
    (state) => state.modalReducer.support
  );

  var close = () => {
    dispatch(setSupportMessage({ message: "" }));
    dispatch(setSupportShown(false));
  };
  var handleClose = (ev) =>
    ev.target && Array.from(ev.target.classList).includes("fixed") && close();
  useEffect(() => {
    window.addEventListener(
      "keyup",
      (ev) => ev.key === "Escape" && isShown && close()
    );
  }, []);

  return (
    isShown && (
      <div
        className="fixed top-0 w-full h-full p-10 PhotoModal hover:cursor-pointer"
        onClick={handleClose}
      >
        <div className="m-10 PhotoModalContent hover:cursor-default w-[75%] h-[80%]">
          <span className="fixed closePhotoModal ">
            <AiOutlineCloseSquare className="fixed w-[25px] h-[25px] hover:cursor-pointer closePhotoButton top-2 right-2 bg-base-100" />
          </span>
          <div></div>
        </div>
      </div>
    )
  );
};

export default SupportModal;
