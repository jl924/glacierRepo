import { buildUrl, apiGetRequest } from "../../helpers/api.js";

describe("buildUrl", function () {
  it("should take in parameters and return a valid url", () => {
    expect(buildUrl("/", { hello: "world" })).toBe(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/?hello=world"
    );

    expect(buildUrl("/", { hello: "world", good: "afternoon" })).toBe(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/?hello=world&good=afternoon"
    );

    expect(
      buildUrl("/methods/api", { hello: "world", good: "afternoon" })
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
