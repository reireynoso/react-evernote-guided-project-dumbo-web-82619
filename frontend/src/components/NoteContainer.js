import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    allNotes: [],
    chosenNote: {},
    searchTerm: "",
    mode: ""
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
      chosenNote: note,
      mode: "view"
    })
  }

  patchNoteInAllNotes = patchedNote => {
    const newArray = this.state.allNotes.map( note => note.id === patchedNote.id ? patchedNote : note )
    this.setState({
      allNotes: newArray,
      chosenNote: patchedNote
    })
  }

  postNoteInAllNotes = newNote => {
    this.setState({
      allNotes: [ ...this.state.allNotes, newNote ]
    })
  }

  makeNewNote = event => {
    fetch('http://localhost:3000/api/v1/notes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: "Default Title",
        body: "This is the default body.",
        user_id: 1
      })
    })
      .then(res => res.json())
      .then(this.postNoteInAllNotes)
  }

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterNotes = () => {
    return this.state.allNotes.filter(note => {
      return note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  toggleMode = string => {
    this.setState({
      mode: string
    })
  }

  render() {
    return (
      <Fragment>
        <Search 
          searchTerm={this.state.searchTerm} 
          handleSearchTermChange={this.handleSearchTermChange}
         />
        <div className='container'>
          <Sidebar 
            allNotes={this.filterNotes()} 
            handleChosenNote={this.handleChosenNote}
            makeNewNote={this.makeNewNote}
           />
          <Content 
            chosenNote={this.state.chosenNote} 
            patchNoteInAllNotes={this.patchNoteInAllNotes}
            mode={this.state.mode}
            toggleMode={this.toggleMode}
           />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
