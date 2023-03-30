import React, { useState } from "react";
import Status from "./Status";
import Helpful from "../sharedComponents/Helpful";
import Report from "../sharedComponents/Report";

const HelpfulStatus = ({
  handleHelpfulClick,
  handleReportClick,
  data,
  messageType = "question",
  module = "QA",
}) => {
  const sharedClasses = "flex-initial";

  // Currently need this if you are relying on hardcoded data
  if (data === undefined) {
    var count = 10;
  } else {
    var count = data.helpfulCount;
  }

  return (
    <Status
      className="helpfulStatus"
      sharedClasses={sharedClasses}
      children={[
        <Helpful
          key={1}
          yesCount={count}
          handleHelpfulClick={handleHelpfulClick}
          className={sharedClasses + " status"}
          messageType={messageType}
          module={module}
        />,
        <Report
          key={2}
          handleReportClick={handleReportClick}
          className={sharedClasses + " status"}
          module={module}
        />,
      ]}
    />
  );
};

export default HelpfulStatus;
