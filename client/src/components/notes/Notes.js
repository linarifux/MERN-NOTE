import { Box } from '@mui/system';
import {Grid} from '@mui/material'
import React, {useState, useEffect} from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';
import { showAllNotes } from '../../service/api';

const Notes = () => {
    // const notes = [1,2,3,4,5,6,7,8,9]
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const allNotes = await showAllNotes()
            setNotes(allNotes.data)
        }
        fetchData()
    }, [])
  return (
      <Box>
          <Grid container spacing={2}>
            {notes.map((note, index) => {
                return(
                    <Grid key={index} item lg={4} md={12} sm={12}><Link to={`/details/${note._id}`} style={{textDecoration: 'none', color: 'inherit'}}><Note note={note} /></Link></Grid>
                )
            })}
          </Grid>
      </Box>
  );
};

export default Notes;
