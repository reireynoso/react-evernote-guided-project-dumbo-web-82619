import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map(note => <NoteItem key={note.id} handleClickNote={props.handleClickNote} note={note}/>)}
      
    </ul>
  );
}

export default NoteList;
