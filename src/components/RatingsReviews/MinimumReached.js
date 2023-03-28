import React from "react";

export default function MinimumReached({
  text,
  bg = "base-200",
  minimum = 50,
}) {
  return (
    <div
      className={
        "flex bg-inherit flex-row justify-end w-full h-8 mt-4 bg-" + bg
      }
    >
      {text.length < minimum ? (
        <span className="text-sm bold">
          {"Minimum required characters left: [" +
            (minimum - text.length) +
            "]"}
        </span>
      ) : (
        <span className="text-sm bold">Minimum reached.</span>
      )}
    </div>
  );
}
