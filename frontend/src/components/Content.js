import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  state = {
    editMode: false
  }
  noteExists = () => {
    return Object.keys(this.props.clickedNote).length !== 0
  }

  handleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  renderContent = () => {
    if (this.noteExists() && this.state.editMode) {
      return <NoteEditor handleEditMode={this.handleEditMode} clickedNote={this.props.clickedNote} />;
    } else if (this.noteExists()) {
      return <NoteViewer handleEditMode={this.handleEditMode} clickedNote={this.props.clickedNote}/>;
    } else {
      return <Instructions />;
    }
    // console.log(this.noteExists())
    // return <NoteViewer clickedNote={this.props.clickedNote}/>
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
