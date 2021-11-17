import React from 'react';

const NoteContent =({note}) => {
    return (
      <>
        <li>{note.content}</li>
      </>
    );
};


export default NoteContent;