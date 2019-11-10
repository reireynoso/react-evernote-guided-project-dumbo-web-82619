import React, { Fragment } from 'react';

const NoteViewer = ({ chosenNote, toggleMode }) => {
  return (
    <Fragment>
      <h2>{chosenNote.title}</h2>
      <p>{chosenNote.body}</p>
      <button onClick={event => toggleMode("edit")}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
