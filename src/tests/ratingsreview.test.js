// placeholder test
import React from "react";
import RatingsReviews from "../components/RatingsReviews";
import { render, screen } from "@testing-library/react";

describe("RatingsReview", function () {
  it("should render 2 reviews", () => {
    const { queryAllByText, container } = render(<RatingsReviews />);
    expect(container.querySelectorAll(".review").length).toBe(2);
  });
});
