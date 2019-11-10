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
