import React, { Fragment } from 'react';

const NoteViewer = ({ chosenNote, toggleEdit }) => {
  return (
    <Fragment>
      <h2>{chosenNote.title}</h2>
      <p>{chosenNote.body}</p>
      <button onClick={toggleEdit}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
