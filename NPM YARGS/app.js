// const fs            = require('fs')
const {foldering, saveContact}     = require('./contact')
const yargs         = require('yargs');
const { hideBin }   = require('yargs/helpers');

foldering();

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
        const contact = {
            name:   argv.name,
            email:  argv.email,
            mobile: argv.mobile,
        };

        saveContact(contact);
        
    }
})
.demandCommand()
.parse();