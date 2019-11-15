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
  render() {
    return (
      <form className="note-editor">
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
