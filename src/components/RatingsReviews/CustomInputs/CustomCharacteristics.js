import React from "react";
import { useField } from "formik";
import { useSelector } from "react-redux";

export default function CustomCharacteristics({ label, ...props }) {
  const characteristics = useSelector(
    (state) => state.ratingsReviewsReducer.meta.characteristics
  );
  const labels = useSelector(
    (state) => state.ratingsReviewsReducer.characteristicLabels
  );
  const [field, meta, helpers] = useField(props);
  const error = meta.touched && meta.error;

  const handleChange = async (trait, ev) => {
    const newCharacteristics = { ...field.value };
    newCharacteristics[trait] = parseInt(ev.target.value);
    await helpers.setValue(newCharacteristics);
    await helpers.setTouched(true);
  };

  return (
    <div className="flex flex-col w-[300px]">
      <h2>{label}</h2>
      {characteristics &&
        Object.keys(characteristics).map((trait) => (
          <div key={trait} className="characteristicSlider w-[300px]">
            <label htmlFor={trait}>{`${trait} (${field.value[trait]})`}</label>
            <input
              type="range"
              min="1"
              max="5"
              name={trait}
              value={field.value[trait]}
              onChange={(ev) => handleChange(trait, ev)}
              className="range range-primary"
              step="1"
            />
            <div className="flex justify-between w-full px-2 text-xs">
              {labels[trait].map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
