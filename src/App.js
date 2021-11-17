import NoteContent from "./components/NoteContent";

const App = ({ notes }) => {
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <NoteContent note={note}></NoteContent>
        ))}
      </ul>
    </>
  );
};
export default App;
