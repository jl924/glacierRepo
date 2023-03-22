// placeholder test
import React from "react";
import RatingsReviews from "../components/RatingsReviews";
import { render } from "@testing-library/react";
import { render as rtlRender, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "../components/App.js";
import { store } from "../store.js";
import { Provider } from "react-redux";
import "./style.css";
import "./style.sass";

let queryAllByText, container;
describe("RatingsReview", function () {
  beforeAll(function () {
    const rendered = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    queryAllByText = rendered.queryAllByText;
    container = rendered.container;
  });

  it("should render 2 reviews", () => {
    //const { queryAllByText, container } = render(<RatingsReviews />);
    expect(container.querySelectorAll(".review").length).toBe(2);
  });
});
