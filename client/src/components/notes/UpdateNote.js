import { Button, TextareaAutosize,Input } from '@mui/material';
import { Box } from '@mui/system';
import {detailsView, updateNoteDetails} from '../../service/api'
import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom'

const CreateNote = () => {

    const initialState = {
        title: '',
        description: '',
        createdDate: new Date(),
        creator: 'linarifux'
      }
    const {id} = useParams()
    const [note, setNote] = useState(initialState)

    useEffect(() => {
        const fetch = async () => {
            const data = await detailsView(id)
            setNote(data)
        }
        fetch()
    }, [id])
    const handleOnChange = (e) => {
        setNote({...note,[e.target.name] : e.target.value})
    }

    const navigate = useNavigate()

    const updateNote = async () => {
    await updateNoteDetails(id,note)
    navigate(`/details/${note._id}`)
 }

  return (
      <Box sx={{marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Input placeholder='Note Title' sx={{width: '50%', marginBottom: '30px', outline: 'none', padding: '5px'}} name='title' value={note.title} onChange={(e) => handleOnChange(e)}/>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={8}
            placeholder="Describe your note here..."
            style={{ width: '50%', outline: 'none', border: '1px solid #878787', marginBottom: '30px', padding: '5px' }}
            name='description'
            value={note.description}
            onChange={(e) => handleOnChange(e)}
          />
          <Button variant='contained' onClick={() => updateNote()}>Update</Button>
      </Box>
  );
};

export default CreateNote;
