import React from "react";
import { useDispatch } from "react-redux";
import { scrollFromTopSet } from "../../reducers/reviewListSlice.js";

export default function ScrollToTop() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(ev) => {
        ev.preventDefault();
        dispatch(scrollFromTopSet({ scrollFromTop: -1 }));
      }}
      className=" underline cursor-pointer text-center relative w-full z-10 top-[4rem] bg-base-100"
    >
      Scroll To Top
    </div>
  );
}
