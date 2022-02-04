import React, { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import DetailNote from './components/notes/DetailNote';
import CreateNote from './components/notes/CreateNote';
import UpdateNote from './components/notes/UpdateNote'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Navbar />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path={'/details/:id'} element={<DetailNote />} />
          <Route path='/create' element={<CreateNote />} />
          <Route path='/update/:id' element={<UpdateNote />} />
         </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
