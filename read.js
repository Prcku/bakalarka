
// Requiring the module
const reader = require('xlsx')

// Reading our test file
const file = reader.readFile('./data.xlsx')

let json = [];

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
{
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {
        json.push(res)
    })
}

// Printing data
console.log(json)
const myJSON = JSON.stringify(json , null , 2);
let fs = require('fs');
fs.writeFile("data.json", myJSON, function(err, result) {
    if(err) console.log('error', err);
});