import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Note = ({note}) => {
    const {title, description} = note
  return (
      <Box sx={{
          border: '1px solid #878787',
          borderRadius: '5px',
          padding: '5px'
      }}>
          <Typography sx={{
              color: '#474747',
              textAlign: 'center',
              marginBottom: '10px',
              fontSize: '25px'
          }}>{title}</Typography>
          <Typography sx={{
              textAlign: 'center'
          }}>{description}</Typography>
      </Box>
  );
};

export default Note;
