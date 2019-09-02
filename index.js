const fs = require("fs");
const os = require("os");
const FILE_PATH =
  "/home/nutthakorn/Downloads/Documents/Agrimetrics/data_200_farmers/khonkean.csv";

const readCsvFile = filePath => {
  try {
    const readBuffer = fs.readFileSync(filePath);
    return readBuffer
      .toString("utf8")
      .trim()
      .split(os.EOL);
  } catch (error) {
    return new Error(error);
  }
};

const converseFileIntoArray = longString => {
  let csvElement = [];
  for (let i = 0; i < longString.length; i++) {
    const str = longString[i].trim();
    let splitedString = str.split(",");
    let nonNullArray = splitedString.filter(Boolean);
    csvElement.push(nonNullArray);
  }
  return csvElement;
};

const readSomething = readCsvFile(FILE_PATH);
const csvElement = converseFileIntoArray(readSomething);
for (let i = 0; i < csvElement.length; i++) {
  const str = csvElement[i];
  console.log(str[0]);
}
