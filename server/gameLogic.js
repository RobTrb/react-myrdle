/*
function createTimer() {
  let startTime = null;

  //function that formats time to propper format
  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes} minutes and ${seconds} seconds`;
  }

  return {
    start: function () {
      startTime = Date.now();
      console.log("Timer started");
    },
    stop: function () {
      if (startTime === null) {
        console.log("Timer was not started.");
        return null;
      }
      const elapsed = Date.now() - startTime;
      const formatted = formatTime(elapsed);
      return formatted;
    },
  };
}
*/

