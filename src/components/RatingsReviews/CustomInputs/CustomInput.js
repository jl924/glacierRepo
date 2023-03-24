import React from "react";
import { useField } from "formik";

export default function CustomInput({ label, type = "text", ...props }) {
  const [field, meta, helpers] = useField(props);
  const error = meta.touched && meta.error;

  const handleChange = async (ev) => {
    await helpers.setValue(ev.target.value);
    await helpers.setTouched(true);
  };

  return (
    <div className="flex flex-col">
      {error && meta.touched && <div className="text-error">{error}</div>}
      <label htmlFor={props.name}>{label}</label>
      <input
        className="w-[450px] input input-sm bg-base-200 border-1 border-primary"
        onChange={handleChange}
        value={field.value}
        type={type}
        name={props.name}
        onBlur={field.onBlur}
      />
    </div>
  );
}
