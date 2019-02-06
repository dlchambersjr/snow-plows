import React from 'react';
import plowData from '../../data/data.json';
import Plows from '../plow/';
import Form from '../form/';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plows: plowData,
      formData: {},
      formView: false
    };
  }

  editPlow = (plowId) => {
    let formData = this.state.plows[plowId];
    formData.index = plowId;
    this.setState({ formData, formView: true });
  }

  handleSubmit = (updatedPlowData) => {
    let { plowIdx, id, type, location } = updatedPlowData;
    let plows = this.state.plows;

    plows[plowIdx].id = id;
    plows[plowIdx].type = type;
    plows[plowIdx].location = location;

    this.setState({ plows, formView: false });
  }

  render() {
    return (
      <React.Fragment >
        <Plows onSubmit={this.editPlow} plows={this.state.plows} />

        <Form
          onSubmit={this.handleSubmit}
          formView={this.state.formView}
          index={this.state.formData.index}
          id={this.state.formData.id}
          type={this.state.formData.type}
          location={this.state.formData.location}
        />

      </React.Fragment >
    )
  }
}

export default List;

