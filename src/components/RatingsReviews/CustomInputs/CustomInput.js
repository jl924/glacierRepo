import React from "react";
import { useField } from "formik";

export default function CustomInput({
  label,
  type = "text",
  placeholder = "",
  privacy = "",
  ...props
}) {
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
        className="rounded-none w-[450px] input input-sm bg-base-100 border-1 border-primary"
        onChange={handleChange}
        value={field.value}
        type={type}
        name={props.name}
        onBlur={field.onBlur}
        placeholder={placeholder}
      />
      {privacy !== "" && <h3>{privacy}</h3>}
    </div>
  );
}
