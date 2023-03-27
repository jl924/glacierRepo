const {
  forEachReplaceAll,
} = require("../../components/RatingsReviews/ReviewListItem");

describe("forEachReplaceAll", function () {
  it("should replace all occurrences of hello in this string with a mark", function () {
    const test = " this is hello a test";
    const expected =
      ' this is <mark className="text-yellow-300">hello</mark> a test';
    expect(forEachReplaceAll(test, 5, /[hH][eE][lL][lL][oO]/)).toBe(expected);
  });

  it("should handle multiple occurrences", function () {
    const test =
      " I recommend this. I couldn't recommend this more if I wanted to. I recommend t.";
    const expected =
      ' I <mark className="text-yellow-300">reco</mark>mmend this. I couldn\'t <mark className="text-yellow-300">reco</mark>mmend this more if I wanted to. I <mark className="text-yellow-300">reco</mark>mmend t.';
    expect(forEachReplaceAll(test, 4, /[rR][eE][cC][oO]/)).toBe(expected);
  });
});
