import { describe, expect, jest } from "@jest/globals";
import { serviceAdapter } from "./services.js";

describe("serviceAdapter", () => {
  it('tests wordChecker() and should change "result" to fit paramaters of list item 3 in end goals', () => {
    const output = serviceAdapter.wordChecker("grape", "great");
    expect(output).toEqual({
      checkedGuess: [
        { letter: "G", result: "correct" },
        { letter: "R", result: "correct" },
        { letter: "A", result: "misplaced" },
        { letter: "P", result: "incorrect" },
        { letter: "E", result: "misplaced" },
      ],
    });
  });  
});
