import { Box } from '@mui/material';
import React from 'react';
import Notes from '../notes/Notes';
import SearchBar from './SearchBar';

const Home = () => {
  return (
      <Box 
      sx={{
          marginTop: '100px'
      }}>
          <Box sx={{
              maxWidth: '70vw',
              margin: '0 auto',
          }}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}><SearchBar /></Box>
            <Notes></Notes>
          </Box>
      </Box>
  )
};

export default Home;
