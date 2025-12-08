const fs = require('fs');

const foldering = function() {
    

    const dirPath = './data';
    if (!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath);
    }

    const dataPath = './data/contacts.json'
    if (!fs.existsSync(dataPath)){
        fs.writeFileSync(dataPath,'[]','utf-8');
    }
}

const saveContact = function(contact) {
    const file      = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts  = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
}

module.exports = {foldering, saveContact};
