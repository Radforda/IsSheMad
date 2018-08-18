var expect = require("chai").expect;
var logic=require("./logic/logic")

describe("logic.run", function() {
  it("should multiply properly when passed numbers", function() {
    expect(logic.run("Why are you still here???")).to.be.a('number');
  });
});

