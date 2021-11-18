import NoteContent from './components/NoteContent';
import { useState } from 'react';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('a new note...');

  const onChangeHandler = (event) => {
    event.preventDefault();
    console.log("Event", event);
    console.log('Event.target', event.target);
    console.log('Event.target.value', event.target.value);
    setNewNote(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const notesObject = {
      id: notes.length +1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    };
    setNotes(notes.concat(notesObject));
    //setNotes(notes.concat(newNote));
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <NoteContent key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <input value={newNote} onChange={onChangeHandler}/>
        <button type='submit'>Insert your note.</button>
      </form>
    </div>
  );
};

export default App;
