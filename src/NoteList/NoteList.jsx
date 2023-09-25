import Note from './Note';

function NoteList ({notes, handleDeleteNote,handleSetNotes }) {
    return (
        <div className='NotesList'>
            {notes.map((note)=> (
                <Note 
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    desc={note.desc}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    notes={notes}
                    handleSetNotes={handleSetNotes}
                />
            ))}
        </div>
    )
}
export default NoteList;