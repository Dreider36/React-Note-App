import Trash from './../assets/trash.png';
import Pencil from './../assets/pencil.png';
import './NoteList.css'
import { useEffect, useState } from 'react';

function Note ({ id, title, desc, date, handleDeleteNote, notes, handleSetNotes }) {
    const [showInput, setShowInput] = useState(false);
    const [Title, setTitle] = useState(title);
    const [Desc, setDesc] = useState(desc);

    useEffect(()=> {
        title = Title;
        desc = Desc;
        const indexToUpdate = notes.findIndex((note) => note.id === id);
        const updatedNote = { ...notes[indexToUpdate], title:Title,desc:Desc };
        notes[indexToUpdate] = updatedNote;
        handleSetNotes([...notes])
    },[Title,Desc])

    return (
        <div className="Note" key={id}>
            <div className="row space-btw">
                {!showInput ? (<span><h4>{Title}</h4></span>) 
                :(<input type='text' className='TitleInput' value={Title} onChange={e=>setTitle(e.target.value)}/>)}
                <div>
                    <img src={Pencil}
                        className='Icon'
                        width='20px'
                        height='20px'
                        onClick={()=>setShowInput(prev => !prev)}
                    />
                    <img src={Trash}
                        className='Icon'
                        width='20px'
                        height='20px'
                        onClick={()=>handleDeleteNote(id)}
                    />
                </div>
            </div>
            <div className='row massive-row'>
                {!showInput ? (<span>{Desc}</span>) 
                :(<textarea value={Desc} onChange={e=>setDesc(e.target.value)} type='text' className='DescInput'></textarea>)}
                
            </div>
            <div className='row flex-end'>
                <small>{date}</small>
            </div>
        </div>
    )
}
export default Note;