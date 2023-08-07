import logo from './logo.svg';
import './App.css';
import Siding from './Siding';
import { useState } from 'react';
import Note from './Note';

function App() {
  const [notes,setNotes]=useState('notes');

  const Addnotes =()=>{
    console.log("ajith");
    const newNote={
      id:id(),
      title:"notes",
      body:" ",
      lastModified:Date.now(),
    }
  };
return(
  <div className='header'>
    Notes taking Application
    <Note/>
    <Siding/>
  </div>
)
}
export default App