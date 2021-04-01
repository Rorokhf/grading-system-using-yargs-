const fs = require('fs')
const yargs = require('yargs')
const addNote = (name,subject,grade,comment) =>{
    const notes = loadNotes()
    
    const duplicateTitles = notes.filter((note)=> note.name === name
       
       
    )
   

   if(duplicateTitles.length ===0){
        notes.push({
        name,
        subject,
        grade,
        comment
    })
    saveNotes(notes)
    console.log('Saved Successfully')

   }
   else{
       console.log('Error Duplicate title')
   }
}
const loadNotes = () =>{
    

    try{
        const data = fs.readFileSync('notes.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) =>{
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}

const removeNote = (name) =>{
    const notes = loadNotes();

    const notesToKeep = notes.filter((note)=>{
        return note.name !== name
    })

    console.log(notesToKeep)

    saveNotes(notesToKeep)
    console.log('Note is removed')
}

const listNotes = () =>{
    const notes = loadNotes()
    //console.log(loadNotes())
    notes.forEach((note) => {
        console.log(note.name)
        
    });
 }

const readNote = (name) =>{
    const notes = loadNotes()

    const note = notes.find((note)=>{
        return note.name === name
    })

    if(note){
        console.log('This is name'+ note.name)
        console.log('This is subject '+ note.subject)
        console.log('This is grade '+ note.grade)
        console.log('This is comment '+ note.comment)
    }
    else{
        console.log('Name not found')
    }

}
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}