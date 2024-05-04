// redux/reducers.js

const initial_State = {
    notes: []
  };
  
// redux/reducer.js

export const rootReducer = (state = initial_State, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            };
        case 'PIN_NOTE':
            const pinnedNoteIndex = state.notes.findIndex(note => note.id === action.payload);
            const pinnedNote = state.notes[pinnedNoteIndex];
            const updatedNotes = [
                pinnedNote,
                ...state.notes.slice(0, pinnedNoteIndex),
                ...state.notes.slice(pinnedNoteIndex + 1)
            ];
            return {
                ...state,
                notes: updatedNotes
            };
        default:
            return state;
    }
};




  