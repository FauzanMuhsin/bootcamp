const fs = require('fs');

const loadContact = () => {
    const file      = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts  = JSON.parse(file)
    return contacts;
}


const findContact = (name) => {
    const contacts = loadContact();
    const contact  = contacts.find((contact)=>contact.name.toLowerCase() === name.toLowerCase());

    if (!contact) {
        console.log('data not found');
        return false
    };

    return contact;
}

const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact);
    saveContact(contacts)
}

const editContact = (newContact) => {
    const contacts = loadContact();
    const filtered = contacts.filter(
        (contact) => contact.name.toLowerCase() !== newContact.prevName.toLowerCase()
    );
    delete newContact.prevName
    filtered.push(newContact);
    saveContact(filtered)
}

const saveContact = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
}

const checkDuplicate = (name) => {
    const contacts = loadContact();
    return contacts.find(contact => contact.name === name)
}

const deleteContact = (name) => {
    const contacts = loadContact();
    const newcontact = contacts.filter(
        (contact) => contact.name.toLowerCase() !== name.toLowerCase()
    );
    saveContact(newcontact)
}

module.exports = {
    findContact,
    loadContact,
    saveContact,
    addContact,
    editContact,
    checkDuplicate,
    deleteContact,
};
