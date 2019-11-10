import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
    title: this.props.chosenNote.title,
    body: this.props.chosenNote.body
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${this.props.chosenNote.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(patchedNote => {
      this.props.patchNoteInAllNotes(patchedNote)
      this.props.toggleEdit()
    })
  }
  
  handleCancel = event => {
    event.preventDefault()
    this.props.toggleEdit()
  }

  render() {
    return (
      <form className="note-editor" onSubmit={this.handleSubmit} >
        <input 
        type="text" 
        name="title"
        value={this.state.title} 
        onChange={this.handleChange}
         />
        <textarea 
        name="body"
        value={this.state.body} 
        onChange={this.handleChange}
         />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={this.handleCancel} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
