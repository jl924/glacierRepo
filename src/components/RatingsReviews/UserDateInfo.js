import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import moment from "moment";

const UserDateInfo = ({ review }) => {
  console.log(review);
  return (
    <div className="userDateCheck inline-flex">
      <AiFillCheckCircle />
      <a href="#">{`${review.reviewer_name}, ${moment(review.date).format(
        "MMMM D, YYYY"
      )}`}</a>
    </div>
  );
};

export default UserDateInfo;
