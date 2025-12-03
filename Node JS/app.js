const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is your name?', (name) => {
    rl.question('apa nama panggilanmu?', (panggilan) => {
        rl.question('tempat n tanggal lahir?', (ttl) => {
            rl.question('jenis kelamin?', (kelamin) => {
                rl.question('berapa no telponmu?', (no) => {
                    rl.question('punya email gak?', (email) => {
                        rl.question('rumahnya sebelah mana?', (alamat) => {
                            console.log(`nama                   = ${name}`);
                            console.log(`panggilan              = ${panggilan}`);
                            console.log(`tempat n tanggal lahir = ${ttl}`);
                            console.log(`jenis kelamin          = ${kelamin}`);
                            console.log(`no telp                = ${no}`);
                            console.log(`emaill                 = ${email}`);
                            console.log(`alamat                 = ${alamat}`);

                            rl.close(); 
                        })
                    })
                })
            })
        })
    })
});