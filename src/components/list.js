import React from 'react';
import plowData from '../data/data.json';
import Plows from './plows.js';
import Form from './form.js';

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

  handleSubmit = (updatedData) => {
    let { plowIdx, id, type, location } = updatedData;
    let updatePlows = this.state.plows;

    updatePlows[plowIdx].id = id;
    updatePlows[plowIdx].type = type;
    updatePlows[plowIdx].location = location;

    this.setState({ plows: updatePlows, formView: false });
  }

  render() {
    return (
      <React.Fragment >

        {this.state.plows.map((plow, index) => {
          return < ul key={index} >
            <Plows id={plow.id} type={plow.type} location={plow.location} />
            <button onClick={() => this.editPlow(index)}>EDIT</button>
          </ul>
        })}

        <Form onSubmit={this.handleSubmit} formView={this.state.formView} index={this.state.formData.index} id={this.state.formData.id} type={this.state.formData.type} location={this.state.formData.location} />

      </React.Fragment >
    )
  }

}

export default List;

