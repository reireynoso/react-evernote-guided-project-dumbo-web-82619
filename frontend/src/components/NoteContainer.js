import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    allNotes: [],
    chosenNote: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(userArray => {
      this.setState({
        allNotes: userArray[0].notes
      })
    })
  }

  handleChosenNote = note => {
    this.setState({
      chosenNote: note
    })
  }

  patchNoteInAllNotes = patchedNote => {
    const newArray = this.state.allNotes.map( note => note.id === patchedNote.id ? patchedNote : note )
    this.setState({
      allNotes: newArray,
      chosenNote: patchedNote
    })
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar allNotes={this.state.allNotes} handleChosenNote={this.handleChosenNote} />
          <Content chosenNote={this.state.chosenNote} patchNoteInAllNotes={this.patchNoteInAllNotes} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
