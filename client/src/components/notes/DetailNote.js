import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Delete, Edit } from '@mui/icons-material';
import React, {useState, useEffect} from 'react';
import { deleteNoteById, detailsView } from '../../service/api';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DetailNote = () => {
  const [note, setNote] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetch = async () => {
      const response = await detailsView(id)
      setNote(response)
      setIsLoaded(true)
    }
    fetch()
  }, [id])

  const deleteNote = async () => {
    await deleteNoteById(id)
    navigate('/')
  }

  return (
      <Box sx={{marginTop: '300px'}}>
          <Box sx={{border: '1px solid #878787', maxWidth: '30vw', margin: '0 auto', padding: '10px', borderRadius: '5px',
        textAlign: 'center'}}>
            <Typography sx={{fontSize: '30px', marginBottom: '10px'}}>{isLoaded?`${note.title}`:'Loading...'}</Typography>
            <Typography>{isLoaded?`${note.description}`:'Loading...'}</Typography>
            <Box sx={{margin: '20px auto', display: 'flex', justifyContent: 'space-evenly', maxWidth: '20vw'}}>
              <Link to={`/update/${id}`} style={{textDecoration: 'none', color: 'inherit'}}><Edit sx={{fontSize: '30px', border: '1px solid #878787', cursor: 'pointer'}}/> </Link>
              <Delete sx={{fontSize: '30px', border: '1px solid #878787', cursor: 'pointer'}} onClick={() => deleteNote()}/>
            </Box>
          </Box>
      </Box>
  );
};

export default DetailNote;
