// placeholder test
import React from "react";
import RatingsReviews from "../components/RatingsReviews";
import { render } from "@testing-library/react";
import { render as rtlRender, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "../components/App.js";
import { store } from "../store.js";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import "./style.css";
import "./style.sass";

let queryAllByText, container;
describe("RatingsReview", function () {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      createRoot(container).render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should render 2 reviews by default", () => {
    expect(container.querySelectorAll(".review").length).toBe(2);
  });

  /* it("should increase the helpfulness by one when clicking on the yes button", (done) => {
    let text = container.querySelector(".helpfulStatus > h5").textContent;
    let initialCount = parseInt(
      text.slice(text.indexOf("(") + 1, text.indexOf(")"))
    );
    act(() => container.querySelector(".helpfulStatus > h5 > button").click());
    setTimeout(() => {
      text = container.querySelector(".helpfulStatus > h5").textContent;
      let newCount = parseInt(
        text.slice(text.indexOf("(") + 1, text.indexOf(")"))
      );
      expect(newCount - 1).toBe(initialCount);
      done();
    }, 500);
    //;
  }); */
});
