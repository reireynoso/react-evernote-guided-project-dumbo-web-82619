import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    notes: [],
    clickedNote: {},
    editMode: false,
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/api/v1/notes`)
    .then(resp => resp.json())
    .then(notes => {
      // console.log(notes)
      this.setState({
        notes
      })
    })
  }

  handleFilterByTitle = () => {
    return this.state.notes.filter(note => {
      return note.title.toLowerCase().includes(this.state.searchTerm.trim().toLowerCase())
    })
  }

  handleSearchTerm = (e) => {
    // console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleNewNote = (newNote) => {
    console.log(newNote)
    this.setState({
      notes: [...this.state.notes, newNote]
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
        <Search handleSearchTerm={this.handleSearchTerm} />
        <div className='container'>
          <Sidebar handleNewNote={this.handleNewNote} handleClickNote={this.handleClickNote} notes={this.handleFilterByTitle()} />
          <Content editMode={this.state.editMode} handleEditMode={this.handleEditMode} handleUpdateNote={this.handleUpdateNote} clickedNote={this.state.clickedNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
