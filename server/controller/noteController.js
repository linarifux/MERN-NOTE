const Note = require('../model/noteDB')

const createNote = async (req,res) => {
    try{
        const note = new Note(req.body)
        await note.save()
        res.status(201).json({msg: 'ok', note})
    }catch(e){
        res.status(500).send(e)
    }
}

const getAllNotes = async (req,res) => {
    try{
        const notes = await Note.find()
        res.status(200).send(notes)
    }catch(e){
        res.status(404).send(e)
    }
}

const getNoteByID = async (req,res) => {
    try{
        const note = await Note.findById({_id: req.params.id})
        res.status(200).send(note)
    }catch(e){
        res.status(404).send(e)
    }
}

const updateNoteByID = async (req,res) => {
    try{
        const note = await Note.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(201).send(note)
    }catch(e){
        res.status(500).send(e)
    }
}

const deleteNoteByID = async (req,res) => {
    try{
        const note = await Note.findByIdAndDelete(req.params.id)
        res.status(200).send(note)
    }catch(e){
        res.status(404).send(e)
    }
}

const serarchByTitle = async (req,res) => {
    try{
        const title = req.body
        const notes = await Note.find({title})
        res.status(200).send(notes)
    }catch(e){
        res.status(404).send(e)
    }
}

module.exports = {createNote, getAllNotes, getNoteByID, updateNoteByID, deleteNoteByID, serarchByTitle}