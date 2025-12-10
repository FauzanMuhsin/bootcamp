const contact       = require('./contact')
const yargs         = require('yargs');
const { hideBin }   = require('yargs/helpers');

contact.foldering();

const argv = yargs(hideBin(process.argv))
.command({
    command:  'add',
    describe: 'add new contact',
    builder:{
        name:{
            describe:     'contact name',
            demandOption: 'true',
            type:         'string',
    
        },
        email:{
            describe:     'contact email',
            demandOption: 'false',
            type:         'string',
    
        },
        mobile:{
            describe:     'contact mobile phone number',
            demandOption: 'true',
            type:         'string',
    
        },
    },
    handler(argv){
        contact.saveContact(
            argv.name,
            argv.email,
            argv.mobile,);
        
    },
})

.command({
    command:'list',
    describe:'shoe contact list',
    handler() {
        contact.listContact();
    },
})

.command({
    command:'delete',
    describe:'delete contact',
    builder:{
        name:{
            describe:     'contact name',
            demandOption: 'true',
            type:         'string',
        }
    },
    handler(argv) {
        contact.deleteContact(
            argv.name,
        )
    },
})


.command({
    command:'detail',
    describe:'detail contact',
    builder:{
        name:{
            describe:     'detail kontak yg dicari',
            demandOption: 'true',
            type:         'string',
        }
    },
    handler(argv) {
        contact.detailContact(
            argv.name,
        )
    },
})

.demandCommand()
.parse();