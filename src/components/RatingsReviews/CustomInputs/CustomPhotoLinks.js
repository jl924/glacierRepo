import React from "react";
import { useField } from "formik";

export default function CustomPhotoLinks({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const error = meta.touched && meta.error;

  const handleChange = async (ev) => {
    await helpers.setValue(event.target.value.split("\n"));
    await helpers.setTouched(true);
  };

  return (
    <div className="flex flex-col w-full justify-around">
      {error &&
        meta.touched &&
        error.map((err) => (
          <div className="text-error w-full text-center">{err}</div>
        ))}
      <label htmlFor={props.name} className="mb-4">
        {label}
      </label>
      <textarea
        className="w-[450px] textarea textarea-primary bg-base-200"
        onChange={handleChange}
        value={field.value.join("\n")}
        name={props.name}
        onBlur={field.onBlur}
      />
    </div>
  );
}
