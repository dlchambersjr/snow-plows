import React from 'react';
import If from './if.js';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      type: '',
      location: '',
      neigborhoods: ['Queen Anne', 'West Seattle', 'SODO', 'Columbia City'],
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
      id: parseInt(event.target.id.value),
      type: event.target.type.value,
      location: event.target.location.value,
    }

    this.props.onSubmit(updateData);
  }

  render() {
    console.log('FORM STATE: ', this.state);
    return (
      <If condition={this.props.formView}>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
          <label>ID: <input defaultValue={this.state.id} name="id" size="3" /> </label>
          <label>TYPE:  <input defaultValue={this.state.type} name="type" size="35" /> </label>
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