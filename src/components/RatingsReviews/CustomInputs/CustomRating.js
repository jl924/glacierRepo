import React from "react";
import { useField } from "formik";

export default function CustomRating({ label, ...props }) {
  const ratings = [0, 1, 2, 3, 4, 5];
  const [field, meta, helpers] = useField(props);
  const error = meta.touched && meta.error;

  const setRating = async (rating) => {
    await helpers.setValue(rating);
    await helpers.setTouched(true);
  };

  return (
    <div className="flex flex-col">
      {error && <div className="text-error">{error}</div>}
      <div className="rating rating-lg ">
        {ratings.map((rating) => (
          <input
            key={rating}
            type="radio"
            name="rating"
            className={rating === 0 ? "rating-hidden" : "mask mask-star 2"}
            value={rating}
            readOnly={true}
            checked={field.value === rating}
            onChange={() => setRating(rating)}
          />
        ))}
      </div>
    </div>
  );
}
