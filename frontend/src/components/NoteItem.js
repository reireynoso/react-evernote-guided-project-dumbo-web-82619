import React from 'react';

const truncate = (body) => {
  return body.split(" ").slice(0, 4).join(" ")
}

const NoteItem = (props) => (
  <li onClick={() => props.handleClickNote(props.note)}>
    <h2>{props.note.title}</h2>
    <p>{truncate(props.note.body)}...</p>
  </li>
);

export default NoteItem;
