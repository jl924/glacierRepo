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
      className="bold underline shadow cursor-pointer text-center absolute w-full z-20 top-[225px] from-base-300 to-base-100 bg-gradient-to-t h-[30px]"
    >
      Scroll To Top
    </div>
  );
}
