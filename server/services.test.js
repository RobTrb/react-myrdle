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
  it("tests createTimer() and should return time past in proper format", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date());

    const timer = serviceAdapter.createTimer();
    timer.start()    
    jest.advanceTimersByTime(135000);
    const stopTimer = timer.stop();
    expect(stopTimer).toEqual('02 minutes and 15 seconds')
  });
});
