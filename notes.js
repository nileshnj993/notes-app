const fs = require('fs');
const chalk = require('chalk');
const { load } = require('signal-exit')

/*const getNotes = function(){
    return 'Your notes..'
}*/

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes '))
    notes.forEach((note)=> {
        console.log(note.title);
    })
} 

const readNote = (title) => {
    const notes = loadNotes();
    const selected_note = notes.find((note) => note.title===title);
    if(selected_note === undefined){
        console.log(chalk.inverse.red('No such note exists!'));
    }
    else{
        console.log(chalk.inverse(title));
        console.log(selected_note.body);
    }
}

const addNote = (title,body) => {
    const notes = loadNotes()
    /* const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })*/
    const duplicateNote = notes.find((note) => note.title==title) 
    // const duplicateNotes = notes.filter((note) => note.title==title);
    // duplicateNotes keeps those notes in the array that have title same as title of new note (it stores duplicate notes)
    // if note.title == title then the note is stored in duplicateNotes. Filter method takes care of element by element access
    
    // filter goes through all elements even if match found. This is waste of time and computation so we use find that only looks for one match. 
    if(duplicateNote===undefined){ // if no duplicates, add the note
    notes.push({
        title:title,
        body:body
    })

    saveNotes(notes)
    console.log('New note added!')
    }
    
    else{
        console.log('Note title already taken!')
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const len = notes.length;
    const existNotes = notes.filter((note) => {
        return note.title !== title;
    })
    if(existNotes.length !== notes.length){
    saveNotes(existNotes);
    console.log(chalk.inverse.green("Note Removed!"));
    }
  
    else{
        console.log(chalk.inverse.red('No such note exists!'));
    }
}

const saveNotes = (notes) => {
    const JSON_notes = JSON.stringify(notes)
    fs.writeFileSync('notes.json', JSON_notes)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return [] // return empty array if file name doesn't exist
    }
}   

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}