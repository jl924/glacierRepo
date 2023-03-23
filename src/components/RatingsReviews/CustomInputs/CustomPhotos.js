import React from "react";
import { useField } from "formik";

export default function CustomPhotos({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const error = meta.touched && meta.error;

  const handleChange = async (ev) => {
    await helpers.setValue(event.target.files);
    await helpers.setTouched(true);
  };

  return (
    <div className="flex flex-row w-full justify-around">
      {error && meta.touched && <div className="text-error">{error}</div>}
      <label htmlFor={props.name}>{label}</label>
      <input
        className="w-[350px] hidden"
        onChange={handleChange}
        type="file"
        id="files"
        multiple={true}
        name={props.name}
        onBlur={field.onBlur}
      />
      <label
        for="files"
        className="file-input w-[200px] h-[32px] leading-8 text-center bg-base-400 text-primary align-center"
      >
        {field.value.length === 0
          ? "Select photos"
          : field.value.length +
            " Photo" +
            (field.value.length > 1 ? "s" : "") +
            " selected"}
      </label>
    </div>
  );
}
