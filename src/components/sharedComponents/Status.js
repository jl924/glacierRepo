import VerticalDivider from "./VerticalDivider";
import React, { useState } from "react";

const createChildrenArr = (children, sharedClasses) => {
  const childrenArr = [];
  children.forEach((child, i) =>
    childrenArr.push(
      child,
      <VerticalDivider key={-i} sharedClasses={sharedClasses} />
    )
  );
  childrenArr.pop();
  return childrenArr;
};

const Status = ({ children, sharedClasses, className }) => {
  const [childrenArr, setChildrenArr] = useState(
    createChildrenArr(children, sharedClasses)
  );
  return <div className={className + " flex flex-row"}>{childrenArr}</div>;
};

export default Status;
