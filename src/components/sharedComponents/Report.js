import React from "react";

const Report = ({ handleReportClick, className, module = 'QA"' }) => {
  return (
    <h5 className={className} module={"Report|" + module}>
      <button onClick={handleReportClick}>Report</button>
    </h5>
  );
};

export default Report;
