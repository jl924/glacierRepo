import React from "react";

const ReviewListHeader = ({ reviews }) => {
  return (
    <div className="header">
      <h3>
        248 Reviews, sorted by{" "}
        <select>
          <option value="relevance">relevance</option>
        </select>
      </h3>
    </div>
  );
};

export default ReviewListHeader;
