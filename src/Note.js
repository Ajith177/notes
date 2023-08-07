import React from 'react'



export const Note = () => {
  return (
   <div>

   </div>
  )
}

export default Note;











// import React, { useState } from 'react';

// function NotesApp() {
//   const [notes, setNotes] = useState([]);
//   const [currentNote, setCurrentNote] = useState('');
//   const [editingIndex, setEditingIndex] = useState(-1);

//   const addNote = () => {
//     if (currentNote.trim() !== '') {
//       if (editingIndex === -1) {
//         setNotes([...notes, currentNote]);
//       } else {
//         const updatedNotes = [...notes];
//         updatedNotes[editingIndex] = currentNote;
//         setNotes(updatedNotes);
//         setEditingIndex(-1);
//       }
//       setCurrentNote('');
//     }
//   };

//   const editNote = (index) => {
//     setCurrentNote(notes[index]);
//     setEditingIndex(index);
//   };

//   const deleteNote = (index) => {
//     const updatedNotes = [...notes];
//     updatedNotes.splice(index, 1);
//     setNotes(updatedNotes);
//   };

//   return (
//     <div>
//       <h1>Notes App</h1>
//       <div>
//         <input
//           type="text"
//           value={currentNote}
//           onChange={(e) => setCurrentNote(e.target.value)}
//         />
//         <button onClick={addNote}>
//           {editingIndex === -1 ? 'Add Note' : 'Update Note'}
//         </button>
//       </div>
// )
