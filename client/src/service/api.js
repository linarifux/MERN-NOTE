const axios = require('axios')
const URL = 'http://localhost:8000'

export const createNote = async (note) => {
    try{
        console.log(note);
        return await axios.post(`${URL}/create`, note)
    }catch(e){
        console.log('Error while calling createNote API', e);
    }
}

export const showAllNotes = async () => {
    try{
        const notes = await axios.get(`${URL}/all`)
        return notes
    }catch(e){
        console.log('Error while calling ShowAllNotes API', e);
    }
}


// get single note by ID
export const detailsView = async (id) => {
    try{
        const note = await axios.get(`${URL}/details/${id}`)
        return note.data
    }catch(e){
        console.log('Error while calling detailsView API', e);
    }
}

// update a note by ID
export const updateNoteDetails = async (id,note) => {
    try{
        return await axios.put(`${URL}/update/${id}`, note)
    }catch(e){
        console.log('Error while calling updateNoteDetails API', e);
    }
}

// delete a note by ID
export const deleteNoteById = async (id) => {
    try{
        return await axios.delete(`${URL}/delete/${id}`)
    }catch(e){
        console.log('Error while calling deleteNoteById', e);
    }
}

// search note with title
export const searchWithTitle = async (title) => {
    
}