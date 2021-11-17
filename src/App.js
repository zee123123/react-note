const App = ({notes}) => {
 return <ul>
   <li>
     {notes.map(note => note.content)}
   </li>
 </ul> 
}
export default App;
