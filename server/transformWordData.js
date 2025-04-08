/*
This is a single use function intended to change the data structure permanently
in words_dictionary.json so that the data can be used more easily in the completed
app.
*/
import fs from "fs/promises";

function repeatingLettersCheck(word) {
  return new Set(word).size !== word.length;
}

async function transformWordData() {
  const inputFile = await fs.readFile("./words_dictionary.json", "utf8");
  const inputData = JSON.parse(inputFile);

  const words = Object.keys(inputData);

  const outputArray = words.map((word) => {
    return {
      word: word,
      letters: word.length,
      letterRepeat: repeatingLettersCheck(word),
    };
  });

  const outputData = { words: outputArray };
  const outputJsonString = JSON.stringify(outputData, null, 1);

  await fs.writeFile("./words_data.json", outputJsonString, "utf-8");
}

transformWordData()