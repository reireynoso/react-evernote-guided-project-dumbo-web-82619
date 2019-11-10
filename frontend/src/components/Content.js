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

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  renderContent = () => {
    if (this.state.editMode) {
      return <NoteEditor chosenNote={this.props.chosenNote} toggleEdit={this.toggleEdit} patchNoteInAllNotes={this.props.patchNoteInAllNotes} />;
    } else if (this.props.chosenNote.title) {
      return <NoteViewer chosenNote={this.props.chosenNote} toggleEdit={this.toggleEdit} />;
    } else {
      return <Instructions />;
    }
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
