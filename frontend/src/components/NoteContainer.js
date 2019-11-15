import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    notes: [],
    clickedNote: {},
    editMode: false
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/api/v1/notes`)
    .then(resp => resp.json())
    .then(notes => {
      console.log(notes)
      this.setState({
        notes
      })
    })
  }

  handleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  handleUpdateNote = (updatedNote) => {
    // console.log(note)
    const updatedNoteArr = this.state.notes.map(note => {
      if(note.id === updatedNote.id){
        note = updatedNote
        return note
      }
      return note
    })
    this.setState({
      notes: updatedNoteArr,
      clickedNote: updatedNote
    })
  }

  handleClickNote = (note) => {
    this.setState({
      clickedNote: note,
      editMode: false
    })
  }
  render() {
    // console.log(this.state.clickedNote)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar handleClickNote={this.handleClickNote} notes={this.state.notes} />
          <Content editMode={this.state.editMode} handleEditMode={this.handleEditMode} handleUpdateNote={this.handleUpdateNote} clickedNote={this.state.clickedNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
