const fs = require('fs');
const validator = require('validator');

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

const loadContact =() => {
    const file          = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts      = JSON.parse(file);

    return contacts;
}

const saveContact = (name,email,mobile) => {
    
    const contact       = {name, email, mobile}
    const contacts      = loadContact();
    const duplicate     = contacts.find((contact)=>contact.name === name);

    if(duplicate) {
        console.log('woy!!! nama kontak ini udah dipake');

        return false;
    };

    if (email) {
        if (!validator.isEmail(email)) {
            console.log('tau cara nulis email gak seh!');
            return false;
        }
    }

    if (mobile) {
        if (!validator.isMobilePhone(mobile, "id-ID")) {
            console.log('pake nomer indo!');
            return false;
        }
    }

    // fungsi untuk menambahkan kontak
    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

}


const listContact = () => {
    const contacts = loadContact();
    console.log('contact list');
    contacts.forEach((contact,i) => {
        console.log(`${i+1}.${contact.name} - ${contact.mobile}`)
    });
}

const deleteContact = (name) => {
    const contacts = loadContact();
    const index    = contacts.findIndex((contact)=>contact.name === name);
    // pakai findIndex untuk cari index keberapa

    if (index == -1) {
        console.log('data not found');
        return false
    };

    contacts.splice(index,1);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
}

const detailContact = (name) => {
    const contacts = loadContact();
    const contact  = contacts.find((contact)=>contact.name.toLowerCase() === name.toLowerCase());

    if (!contact) {
        console.log('data not found');
        return false
    };

    console.log(contact)
}

module.exports = {
    foldering,
    saveContact,
    listContact,
    deleteContact, 
    detailContact
};
