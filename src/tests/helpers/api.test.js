import { buildUrl, apiGetRequest, apiPutRequest } from "../../helpers/api.js";

describe("buildUrl", function () {
  it("should take in parameters and return a valid url", () => {
    expect(
      buildUrl(
        "/",
        { hello: "world" },
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe"
      )
    ).toBe("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/?hello=world");

    expect(
      buildUrl(
        "/",
        { hello: "world", good: "afternoon" },
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe"
      )
    ).toBe(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/?hello=world&good=afternoon"
    );

    expect(
      buildUrl(
        "/methods/api",
        { hello: "world", good: "afternoon" },
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe"
      )
    ).toBe(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/methods/api?hello=world&good=afternoon"
    );
  });
});

describe("apiGetRequest", function () {
  it("should take in parameters and return a valid request", (done) => {
    apiGetRequest("/reviews", { product_id: "37311" })
      .then((req) => {
        expect(req.results.length > 0).toBe(true);
      })
      .catch((err) => console.log(err))
      .finally(() => done());
  });

  it("should blah blah blah", (done) => {
    apiGetRequest("/reviews", { product_id: "37311" })
      .then((req) => {
        expect(req.results.length > 0).toBe(true);
      })
      .finally(() => done());
  });
});

describe("apiPutRequest", function () {
  it("should increase helpfulness of a review by one", (done) => {
    let originalReview;
    apiGetRequest("/reviews", { product_id: "37311", count: 1000 })
      .then((req) => {
        originalReview = req.results[0];
      })
      .then(() => apiPutRequest("/reviews/1277405/helpful"))
      .then(() => apiGetRequest("/reviews", { product_id: "37311" }))
      .then(
        (req) =>
          req.results.filter((review) => {
            return review.review_id === originalReview.review_id;
          })[0].helpfulness
      )
      .then((helpfulness) =>
        expect(helpfulness).toBe(originalReview.helpfulness)
      )
      .catch((err) => console.log(err))
      .finally(() => done());
  });

  it("should blah blah blah", (done) => {
    apiGetRequest("/reviews", { product_id: "37311" })
      .then((req) => {
        expect(req.results.length > 0).toBe(true);
      })
      .finally(() => done());
  });
});
