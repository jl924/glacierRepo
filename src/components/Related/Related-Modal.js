import React, { useRef, useEffect } from "react";

function Modal(props) {


  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;

