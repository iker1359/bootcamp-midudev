import React from 'react';
import { useState } from 'react';

const Note = ({content, date}) => {

    return <li> - {content} {date}</li>

}

export const AppNote = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => { 
    setNewNote(event.target.value) 
  }

  const handleClick = () => {

      const newNoteToAdd = { 
          id: notes.length + 1, 
          content: newNote, 
          date: new Date().toISOString(), 
          important: Math.random() < 0.5 
      }

      setNotes([...notes, newNoteToAdd])
      setNewNote("")

  }


  return (
      <>
          <h1>Notas</h1>
          <ol>
              {props.notes.map((note) => <Note key={note.id} content={note.content} /> )}
          </ol>
          <h2>Crear Nota</h2>
          <input type='text' onChange={handleChange} value={newNote}></input>
          <button onClick={handleClick}>Crear Nota</button>
      </>
  )

}