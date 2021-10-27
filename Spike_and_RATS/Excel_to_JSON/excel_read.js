const fs = require("fs");
const xlsx = require("node-xlsx");
// Or var xlsx = require('node-xlsx').default;
const TM65SpreadSheet = {};
// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(
  fs.readFileSync(
    `/Users/ruaridh.webster/Downloads/CIBSE - Embodied Carbon of MEP products - Daikin(Applied products).xlsx`
  )
);
// Parse a file
const workSheetsFromFile = xlsx.parse(
  `/Users/ruaridh.webster/Downloads/CIBSE - Embodied Carbon of MEP products - Daikin(Applied products).xlsx`
);

// console.log(workSheetsFromBuffer[0].data);

for (let i = 6; i <= 9; i++) {
  const rowKey = workSheetsFromFile[0].data[i][1].toString();
  TM65SpreadSheet["General Information"] = {
    ...TM65SpreadSheet["General Information"],
    [rowKey]: workSheetsFromFile[0].data[i][2],
  };
}

for (let i = 12; i <= 41; i++) {
  const rowKey = workSheetsFromFile[0].data[i][1];
  if (rowKey) {
    TM65SpreadSheet["Essential Information required"] = {
      ...TM65SpreadSheet["Essential Information required"],
      [rowKey]: workSheetsFromFile[0].data[i][2],
    };
  }
}
for (let i = 44; i <= 57; i++) {
  const rowKey = workSheetsFromFile[0].data[i][1];
  if (rowKey) {
    TM65SpreadSheet["Additional Information"] = {
      ...TM65SpreadSheet["Additional Information"],
      [rowKey]: workSheetsFromFile[0].data[i][2],
    };
  }
}
for (let i = 60; i <= 62; i++) {
  const rowKey = workSheetsFromFile[0].data[i][1];
  if (rowKey) {
    TM65SpreadSheet["Information disclosure"] = {
      ...TM65SpreadSheet["Information disclosure"],
      [rowKey]: workSheetsFromFile[0].data[i][2],
    };
  }
}
const TM65SpreadSheetJSON = JSON.stringify(TM65SpreadSheet);
console.log(TM65SpreadSheetJSON);
