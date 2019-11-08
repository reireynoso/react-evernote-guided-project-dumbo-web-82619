import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.allNotes.map(note => <NoteItem note={note} key={note.id} handleChosenNote={props.handleChosenNote} />)}
      {/* <NoteItem /> */}
    </ul>
  );
}

export default NoteList;
