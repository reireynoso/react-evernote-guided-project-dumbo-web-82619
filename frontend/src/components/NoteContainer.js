import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    allNotes: [],
    chosenNote: {}
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
      chosenNote: note
    })
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar allNotes={this.state.allNotes} />
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
