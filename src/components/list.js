import React from 'react';
import plowData from '../data/data.json';
import Plows from './plows.js';
// import Form from './form.js';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plows: plowData,
      locations: ['Queen Anne', 'West Seatte', 'SODO', 'Columbia City'],
      formData: {},
      formView: false
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  editPlow = (plowId) => {
    let formData = this.state.plows[plowId];
    console.log(typeof formData, formData);

    this.setState({ formData, formView: true });
  }

  handleChange = (event) => {
    // let name = event.target.name;
    // let value = event.target.value;
    // console.log(name, value);
    // this.setState({formData[name]: value })


    // console.log('event data', event.target);

    // let id = event.target.id.value;
    // let type = event.target.type.value;
    // let location = event.target.location.value;

    // this.setState({ id, type, location });

  }

  // handleSubmit(name) {
  //   
  // }

  render() {
    return (
      <React.Fragment >

        {this.state.plows.map((plow, index) => {
          return < ul key={index} >
            <Plows id={plow.id} type={plow.type} location={plow.location} />
            <button onClick={() => this.editPlow(index)}>EDIT</button>

          </ul>
        })}

        <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
          <label>ID: <input value={this.state.formData.id} name="id" size="5" /></label>
          <label>TYPE:  <input value={this.state.formData.type} name="type" size="35" /></label>
          <label>LOCATION:  <input value={this.state.formData.location} name="location" size="15" /></label>
          <button>Update</button>
        </form>

        {/* <Form onSubmit={this.handleSubmit} id={this.state.formData.id} type={this.state.formData.type} location={this.state.formData.location} /> */}

      </React.Fragment >
    )
  }


}

export default List;

