import React from "react";
import { useField } from "formik";

export default function CustomBody({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const error = meta.touched && meta.error;

  const handleChange = async (ev) => {
    await helpers.setValue(ev.target.value);
    await helpers.setTouched(true);
  };

  return (
    <div className="flex flex-col">
      {error && meta.touched && <div className="text-error">{error}</div>}
      <label htmlFor={props.name} className="mb-4">
        {label}
      </label>
      <textarea
        className="w-[450px] textarea textarea-primary bg-base-200"
        onChange={handleChange}
        value={field.value}
        name={props.name}
        onBlur={field.onBlur}
      />
    </div>
  );
}
