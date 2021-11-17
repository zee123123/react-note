const App = ({ notes }) => {
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li>{note.content}</li>
        ))}
      </ul>
    </>
  );
};
export default App;
