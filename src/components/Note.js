import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote, pinNote } from "./redux/action";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import "../note.css"

const Note = () => {
    const [note, setNote] = useState('');
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes);

    const submitHandler = (e) => {
        e.preventDefault();
        const newNote = {
            id: Math.random().toString(36).substr(2, 9),
            content: note,
            pinned: false
        };
        dispatch(addNote(newNote));
        setNote('');
    };

    const handleDeleteNote = (id) => {
        dispatch(deleteNote(id));
    };

    const handlePinNote = (id) => {
        dispatch(pinNote(id));
    };

    return (
        <div className="note-container">
            <form onSubmit={submitHandler}>
                <textarea rows={2} cols={30} value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                <button type="submit" id='submit'>+</button>
            </form>

            <div className="note-grid">
                {notes.map(note => (
                    <div key={note.id} className="note-card">
                        <p>{note.content}</p>
                        <div>
                            <button onClick={() => handleDeleteNote(note.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button onClick={() => handlePinNote(note.id)}>
                                <FontAwesomeIcon icon={note.pinned ? faThumbtack : faThumbtack} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Note;
