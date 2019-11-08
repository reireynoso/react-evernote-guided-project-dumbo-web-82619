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

  render() {
    return (
      <form className="note-editor">
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
          <button onClick={this.props.toggleEdit} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
