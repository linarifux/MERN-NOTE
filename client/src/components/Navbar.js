import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
      <>
        <AppBar>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <Link to={'/'} style={{textDecoration: 'none', color: 'inherit'}}><Typography sx={{fontSize: '30px', fontWeight: 700}}>Home</Typography></Link>
                <Typography sx={{fontSize: '30px', fontWeight: 700}}>Note - helps you remember</Typography>
                <Link to={'/create'} style={{textDecoration: 'none', color: 'inherit'}}><Button variant='contained' color='secondary'>New Task</Button></Link>
            </Toolbar>
        </AppBar>
      </>
  )
};

export default Navbar;
