import React from "react";
import moment from "moment";

const AuthorInfo = ({ data, sharedClasses }) => {
  return (
    <h5 className={sharedClasses}>
      by {data.reviewer_name},{" "}
      {moment(new Date(data.date)).format("MMMM D, YYYY")}
    </h5>
  );
};

export default AuthorInfo;
