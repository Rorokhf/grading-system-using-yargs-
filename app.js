// grading system using yargs
const yargs = require('yargs')
const notes = require('./notes')
yargs.command({
    command: 'add',
    describe: 'Add notes',
    builder:{
        name:{
            describe: 'This is name',
            demandOption:true,
            type:'string'
        },
        subject:{
            describe:'This is subject',
            demandOption:true,
            type:'string'
        },
        grade:{
            describe:'This is grade',
            demandOption:true,
            type:Number
        },
        comment:{
            describe:'This is comment',
            demandOption:true,
            type:'string'
        }
    },
    
    handler:(argv) =>{
      
       notes.addNote(argv.name,argv.subject,argv.grade,argv.comment)
    }
})


yargs.command({
    command:'delete',
    describe:'Delete note',
    builder:{
        name:{
            describe:'name is required',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
        notes.removeNote(argv.name)
    }
})

yargs.command({
    command:'list',
    describe:'List note',
    handler:(argv) =>{
        notes.listNotes(argv.name)
    }
})

yargs.command({
    command:'read',
    describe:'Read note',
    builder:{
        name:{
            describe:'This is required name',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
      notes.readNote(argv.name)
    }
})

yargs.parse()