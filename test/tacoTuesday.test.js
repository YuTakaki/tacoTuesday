const { expect } = require("chai");
const { tacoTuesday } = require("../tacoTuesday");

describe("tacoTuesday", () => {
  it("should return an '...???' if the parameter is not an instance of date object", () => {
    const day = "lalalla";
    const day2 = "mehehehe";
    expect(tacoTuesday(day)).to.equal("...???");
    expect(tacoTuesday(day2)).to.equal("...???");
  });

  it("should return 'Its taco tuesday' when it's tuesday", () => {
    const day = "11-16-2021";
    const day2 = "11-09-2021";
    expect(tacoTuesday(day)).to.equal("It's taco🌮🌮🌮 tueeeesday!!!");
    expect(tacoTuesday(day2)).to.equal("It's taco🌮🌮🌮 tueeeesday!!!");
  });

  it("should return 'No Taco for you today' when it's not tuesday", () => {
    const day = "11-15-2021";
    const day2 = "11-10-2021";
    expect(tacoTuesday(day)).to.equal("No Taco for you today");
    expect(tacoTuesday(day2)).to.equal("No Taco for you today");
  });

  it("should return 'Its taco tuesday' when it's tuesday if there is a word 'taco' and tuesday in the string parameter", () => {
    const str = "taco tuesday";
    const str2 = "taco is the best in tuesday";
    const str3 = "tuesday taco";
    expect(tacoTuesday(str)).to.equal("It's taco🌮🌮🌮 tueeeesday!!!");
    expect(tacoTuesday(str2)).to.equal("It's taco🌮🌮🌮 tueeeesday!!!");
    expect(tacoTuesday(str3)).to.equal("It's taco🌮🌮🌮 tueeeesday!!!");
  });
});
