const chalk = require('chalk');
const { describe } = require('yargs');
const yargs = require('yargs'); 
const notes = require('./notes.js');

// const command = process.argv[2];

// console.log(process.argv);

/*if(command === 'add'){
    console.log('Adding Notes!');
}

else if(command === 'remove'){
    console.log('Removing Notes!');
}*/

// customise yargs version
yargs.version('1.1.0');

// add, remove, read, list

// create add command
yargs.command({ // can add to help 
    command:'add',
    describe:'Adding a new note',
    
    // builder helps provide options 
    builder:{
        title:{
            describe:"Note Title",
            demandOption: true, // makes it compulsory to enter value for title argument
            type:'string' // have to provide string value
        },
        body:{
            describe:"Note Body",
            demandOption: true, 
            type:'string'
        }
    },
   /* handler: function(argv){ // need to write argv here as argument as it helps us access command line arguments
        notes.addNote(argv.title, argv.body); 
    }*/
    handler: (argv) => notes.addNote(argv.title,argv.body)
})

// create remove command
yargs.command({ // can add to help 
    command:'remove',
    describe:'Removing a note!',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type:'string'
        }
    },
   /* handler: function(argv){
        notes.removeNote(argv.title);
    }*/

    handler: (argv) => notes.removeNote(argv.title)
})

// create list command
yargs.command({ // can add to help 
    command:'list',
    describe:'Listing all notes!',
    handler: () => notes.listNotes()
})

// create read command
yargs.command({ // can add to help 
    command:'read',
    describe:'Read all notes!',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
})

yargs.parse();
// $0 stores name of file, _ fills with command line arguments that dont have names

// console.log(process.argv);

