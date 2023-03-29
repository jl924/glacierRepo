import React from "react";
import { useField } from "formik";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function CustomRecommended({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const error = meta.touched && meta.error;

  const handleChange = async (ev) => {
    ev.preventDefault();
    await helpers.setValue(!field.value);
    await helpers.setTouched(true);
  };

  return (
    <div className="flex flex-col">
      {error && meta.touched && <div className="text-error">{error}</div>}
      <button
        className="flex flex-row items-center p-3 border border-secondary recommendedButton bg-base-100 hover:bg-base-300 active:bg-secondary"
        onClick={handleChange}
        type="text"
        name={props.name}
        onBlur={field.onBlur}
      >
        {label}
        {field.value ? (
          <AiOutlineCheck className="ml-2" />
        ) : (
          <AiOutlineClose className="ml-2" />
        )}
      </button>
    </div>
  );
}
