import React, {useState} from "react";
import { useField } from "formik";

export default function CustomBody({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const error = meta.touched && meta.error;
  const [hidden, setHidden] = useState(false);

  const handleChange = async (ev) => {
    await helpers.setValue(ev.target.value);
    await helpers.setTouched(true);
  };

  return (
    <div className="flex flex-col" style={{marginBottom: '5px'}}>
      {error && meta.touched && <div className="text-error">{error}</div>}
      <label htmlFor={props.name} className="mb-4">
        {label}
      </label>
      <div className="relative">
        <textarea
        className="rounded-none w-[450px] z-10 bg-transparent relative textarea textarea-primary bg-base-200"
        onChange={handleChange}
        value={field.value}
        name={props.name}
        onBlur={field.onBlur}
        onFocus={(ev) => {console.log('setting hidden to true'); setHidden(true)}}
        onBlur={(ev) => {console.log(ev.target.value, ev.target.value===''); if(ev.target.value === '') setHidden(false)}}
        />
        <div className={"absolute flex flex-row top-2 left-2" + (hidden ? ' hidden' : '')}>

        <span className="text-sm">What made this purchase absolutely delightful or </span>
        <button class='ml-1 btn btn-secondary btn-xs btn-square text-xs w-[50px] z-20' onClick={() => console.log('doom')}>{"not :(?"}</button>
        </div>
        </div>
      <div className='flex flex-row justify-end w-full h-8 mt-4 bg-base-200'>
        {field.value.length <50 ? <span className='text-sm bold'>{'Minimum required characters left: [' + (50 - field.value.length) + ']'}</span> : <span className='text-sm bold'>Minimum reached.</span>}
      </div>
    </div>
  );
}
