import NoteContent from './components/NoteContent';
import { useState } from 'react';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll? notes: notes.filter(note => note.important);

  const changeListener = (event) => {
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
        {/* show content */}
        {notesToShow.map((note) => (
          <NoteContent key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <input value={newNote} onChange={changeListener}/>
        <button type='submit'>Insert your note.</button>
      </form>
    <br />
      <button onClick={() => setShowAll(!showAll)}>show {showAll?'all':'important'} notes</button>
    </div>
  );
};

export default App;
