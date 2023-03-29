import React, { useState } from "react";
import { useField } from "formik";

export default function CustomRating({ label, ...props }) {
  const ratings = [0, 1, 2, 3, 4, 5];
  const [field, meta, helpers] = useField(props);
  const [hovered, setHovered] = useState(undefined);
  const error = meta.touched && meta.error;
  const ratingTexts = ["Poor", "Fair", "Average", "Good", "Great"];

  const setRating = async (rating) => {
    await helpers.setValue(rating);
    await helpers.setTouched(true);
  };

  return (
    <div className="flex flex-col">
      {(error && <div className="text-error">{error}</div>) || (
        <div>{ratingTexts[field.value - 1]}</div>
      )}
      <div className="rating rating-lg ">
        {ratings.map((rating) => [
          <label key={rating + " label"} htmlFor="rating">
            {rating}
          </label>,
          <input
            key={rating}
            type="radio"
            name="rating"
            onMouseEnter={() => setHovered(rating)}
            onMouseOut={() => setHovered(undefined)}
            className={rating === 0 ? "rating-hidden" : "mask mask-star 2"}
            value={rating}
            readOnly={true}
            checked={field.value === rating}
            onChange={() => setRating(rating)}
            style={{
              backgroundColor:
                hovered !== undefined &&
                ((hovered > field.value &&
                  rating > field.value &&
                  rating <= hovered) ||
                  (hovered < field.value &&
                    rating <= field.value &&
                    rating > hovered))
                  ? "grey"
                  : "",
            }}
          />,
        ])}
      </div>
    </div>
  );
}
