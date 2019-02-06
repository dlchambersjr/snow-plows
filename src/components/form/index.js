import React from 'react';
import If from '../../middleware/if.js';

import './form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      type: '',
      location: '',
      neigborhoods: ['Queen Anne', 'West Seattle', 'SODO', 'Columbia City', 'Green Lake', 'Georgetown'],
      plowTypes: ['Dedicated', 'Dedicated w/ Salt', 'Multi-Purpose Truck', 'Sidewalk Blower']
    };
  }

  componentWillReceiveProps = (nextProps) => {
    let { id, type, location } = nextProps;
    this.setState({ id, type, location });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let updateData = {
      plowIdx: this.props.index,
      id: parseInt(this.state.id),
      type: event.target.type.value,
      location: event.target.location.value,
    }

    this.props.onSubmit(updateData);
  }

  render() {
    return (
      <If condition={this.props.formView}>
        <form onSubmit={this.handleSubmit}>
          <h2>Edit Plow ID: {this.state.id}</h2>

          <label>TYPE:  <select value={this.state.type} name="type" onChange={this.handleChange}>
            {this.state.plowTypes.map((type, index) => {
              return <option key={index} value={type}>{type}</option>
            })} </select> </label>

          <label>LOCATION:  <select value={this.state.location} name="location" onChange={this.handleChange}>
            {this.state.neigborhoods.map((hood, index) => {
              return <option key={index} value={hood}>{hood}</option>
            })} </select> </label>

          <button>Update</button>
        </form>
      </If>
    );
  }
}