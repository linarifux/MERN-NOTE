import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import React from 'react';

const SearchBar = () => {
  return (
      <Box sx={{marginBottom: '34px', display: 'flex', alignItems: 'center'}}>
          <Grid container spacing={2}>
            <Grid item lg={10} sm={12} md={12}>
              <Box >
                <input type="text" style={{outline: 'none', fontSize: '20px', padding: '5px', border: '1px solid #878787', borderRadius: '5px', height: '28px'}} size={30}  outline={'none'} placeholder='enter something'/>
              </Box>
            </Grid>
            <Grid item sm={12} lg={2} md={12}>
              <Button variant='contained'>Search</Button>
            </Grid>
          </Grid>
      </Box>
  );
};

export default SearchBar;
