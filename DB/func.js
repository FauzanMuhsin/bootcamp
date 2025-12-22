const fs = require('fs');
const pool = require('./db')

const loadContact = async () => {
    const query     ="SELECT * FROM tb_contacts"
    const result    = await pool.query(query)
    return result
}

const addContact = async (contact) => {
    const { name, mobile, email } = contact;
    await pool.query(
    `INSERT INTO contacts(name,mobile,email) VALUES ($1,$2,$3)`,
    [name, mobile, email]
    );
};


const deleteContact = async (name) => {
    const query  = "DELETE FROM tb_contacts WHERE name = $1 RETURNING *;"
    const result = await pool.query(query,[name]) 

    return result.rows[0]
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
