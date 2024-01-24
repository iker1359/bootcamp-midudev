import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

const Note = ({title, body}) => {

    return <li> <b>{title}</b> <br /> {body}</li>

}

export const AppNote = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
        setNotes(json)
    })

  }, [])

  const handleChange = (event) => { 
    setNewNote(event.target.value) 
  }

  const handleClick = () => {

      const newNoteToAdd = { 
          userId: notes.length + 1,
          id: notes.length + 1, 
          title: newNote, 
          body: newNote
      }

      setNotes([...notes, newNoteToAdd])
      setNewNote("")

  }


  return (
      <>
          <h1>Notas</h1>
          <ol>
              {notes.map((note) => <Note key={note.id} title={note.title} body={note.body} /> )}
          </ol>
          <h2>Crear Nota</h2>
          <input type='text' onChange={handleChange} value={newNote}></input>
          <button onClick={handleClick}>Crear Nota</button>
      </>
  )

}