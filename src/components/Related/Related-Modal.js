import React, { useRef, useEffect } from "react";

function Modal(props) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        props.onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;