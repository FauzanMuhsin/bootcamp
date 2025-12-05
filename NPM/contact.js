const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const i = function() {
    

    const dirPath = './data';
    if (!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath);
    }

    const dataPath = './data/contacts.json'
    if (!fs.existsSync(dataPath)){
        fs.writeFileSync(dataPath,'[]','utf-8');
    }
}

function quest() {

    // make a function main with async
    // make function to ask
    const questions = ask => {
        return new Promise((resolve, reject) => {
            rl.question(ask, (inputVariable) => {
                resolve(inputVariable);
            });
        });
    };

    return questions;
}

module.exports = {i, quest, rl};

//yg ekspor bukan cuma function