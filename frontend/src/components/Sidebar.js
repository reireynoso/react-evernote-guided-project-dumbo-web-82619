import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  newNote = () => {
    const defaultNote = {
      title: "title",
      body: "body"
    }

    fetch(`http://localhost:3000/api/v1/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(defaultNote)
    })
    .then(resp => resp.json())
    .then(note => this.props.handleNewNote(note))
  }
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList handleClickNote={this.props.handleClickNote} notes={this.props.notes} />
        <button onClick={this.newNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
