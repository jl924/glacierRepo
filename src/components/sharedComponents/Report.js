import React from "react";

const Report = ({ handleReportClick, className }) => {
  return (
    <h5 className={className}>
      <button onClick={handleReportClick}>Report</button>
    </h5>
  );
};

export default Report;
