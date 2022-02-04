const express = require('express')
// note controller
const noteController = require('../controller/noteController')

const router = express.Router()

router.post('/create', noteController.createNote )
router.get('/all', noteController.getAllNotes)

// single note view
router.get('/details/:id', noteController.getNoteByID)

// update note by id
router.put('/update/:id', noteController.updateNoteByID)

// delete note by id
router.delete('/delete/:id', noteController.deleteNoteByID)

router.get('/search', noteController.serarchByTitle)

module.exports = router