import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  // console.log(props.clickedNote)
  return (
    <Fragment>
      <h2>{props.clickedNote.title}</h2>
      <p>{props.clickedNote.body}</p>
      <button onClick={() => props.handleEditMode()}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
