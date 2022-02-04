import { Button, TextareaAutosize,Input } from '@mui/material';
import { Box } from '@mui/system';
import {createNote} from '../../service/api'
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const CreateNote = () => {
  const initialState = {
    title: '',
    description: '',
    createdDate: new Date(),
    creator: 'linarifux'
  }

  const [note, setNote] = useState(initialState)

  const handleOnChange = (e) => {
    setNote({...note,[e.target.name] : e.target.value})
  }

  const navigate = useNavigate()

 const upLoadNote = async () => {
  await createNote(note)
  navigate('/')
 }

  return (
      <Box sx={{marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Input placeholder='Note Title' sx={{width: '50%', marginBottom: '30px', outline: 'none', padding: '5px'}} name='title' onChange={(e) => handleOnChange(e)}/>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={8}
            placeholder="Describe your note here..."
            style={{ width: '50%', outline: 'none', border: '1px solid #878787', marginBottom: '30px', padding: '5px' }}
            name='description'
            onChange={(e) => handleOnChange(e)}
          />
          <Button variant='contained' onClick={() => upLoadNote()}>Add</Button>
      </Box>
  );
};

export default CreateNote;
