const {i, quest, rl} = require('./contact');
const fs = require('fs');
const readline = require('readline');


const kondisi = i();
const questions = quest();

const main = async() =>{

    // var question
    const name = await questions('what is your name?');
    const mobile = await questions('your mobile number?');
    const email = await questions('your email??');

    const contact = {name, mobile, email};
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log("thank you :)");
    rl.close();
    
};

main();


// CALLBACK
// rl.question("what is your name?", (name)=> {
//     rl.question("your mobile number?", (mobile)=> {
//         const contact = {name, mobile};

//         //membaca file 
//         const file = fs.readFileSync('data/contacts.json', 'utf8');

//         // mengubah JSON teks ke object javascript
//         const contacts = JSON.parse(file);

//         // push data
//         contacts.push(contact);

//         // menulis data dari contacts ke file
//         // parameter pertama => direct dan parameter kedua => data yang ingin ditulis
//         // parameter ketiga(opsional) => options (encoding dan flag)
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//         console.log("terimakasih sudah memasukkan data diri");
//         rl.close();
//     });
// });