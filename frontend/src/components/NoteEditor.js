import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
    title: this.props.clickedNote.title,
    body: this.props.clickedNote.body
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    fetch(`http://localhost:3000/api/v1/notes/${this.props.clickedNote.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => {
      this.props.handleUpdateNote(data)
      this.props.handleEditMode()
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="note-editor">
        <input onChange={this.handleOnChange} type="text" name="title" value={this.state.title} />
        <textarea onChange={this.handleOnChange} name="body" value={this.state.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={() => this.props.handleEditMode()} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
