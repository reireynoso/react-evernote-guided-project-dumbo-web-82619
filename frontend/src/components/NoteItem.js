import React from 'react';

const NoteItem = (props) => (
  <li>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.substring(0, 25)}...</p>
  </li>
);

export default NoteItem;
