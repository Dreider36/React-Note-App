import './App.css';
import NoteList from './NoteList/NoteList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import Search from './Search/Search';
import Header from './Header/Header';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote () {
    const currentDate = new Date();
    const newNote = {
      id: nanoid(),
      title: 'Назва нотатки',
      desc: 'Опис нотатки',
      date: `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
    }
    setNotes([...notes, newNote])
  }

  function deleteNote (id) {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));
    if(savedNotes) setNotes(savedNotes);
  }, [])

  useEffect(()=> {
    localStorage.setItem('react-notes-data', JSON.stringify(notes))
  }, [notes]);

  return (
    <div className={`center ${darkMode && 'dark-mode'}`}>
      <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode}/>
      <button className='AddNoteBtn' onClick={()=> addNote()}> Add Note </button>
      <Search handleSearchNote={setSearchText}/>
      <NoteList notes={notes.filter((note)=> 
      note.title.toLowerCase().includes(searchText) || note.desc.toLowerCase().includes(searchText))} 
      handleDeleteNote={deleteNote}
      handleSetNotes={setNotes}/>
    </div>
  )
}

export default App
