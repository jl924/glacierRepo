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
      className=" underline cursor-pointer text-center relative w-full z-10 top-[4rem] from-base-200 to-base-100 bg-gradient-to-t h-[30px]"
    >
      Scroll To Top
    </div>
  );
}
