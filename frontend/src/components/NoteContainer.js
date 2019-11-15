import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    notes: [],
    clickedNote: {}
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

  handleClickNote = (note) => {
    // console.log(note)
    this.setState({
      clickedNote: note
    })
  }
  render() {
    // console.log(this.state.clickedNote)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar handleClickNote={this.handleClickNote} notes={this.state.notes} />
          <Content clickedNote={this.state.clickedNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
