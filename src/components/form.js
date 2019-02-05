import React from 'react';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      id: "empty",
      type: "empty",
      location: "empty",
    };

  }

  handleChange = (event) => {
    // let name = event.target.name;
    // let value = event.target.value;
    // console.log(name, value);
    // this.setState({ [name]: value })


    // console.log('event data', event.target);

    // let id = event.target.id.value;
    // let type = event.target.type.value;
    // let location = event.target.location.value;

    // this.setState({ id, type, location });

  }

  handleSubmit(event) {
    event.preventDefault();
    // let id = event.target.id.value;
    // let type = event.target.type.value;
    // let location = event.target.location.value;

    // console.log(id, type, location);

    this.setState({
      id: event.target.id.value,
      type: event.target.type.value,
      location: event.target.location.value
    });

    // this.setState({ id: id, type: type, location: location });


    // let updateData = {
    //   id: event.target.id.value,
    //   type: event.target.type.value,
    //   location: event.target.location.value,
    // }
    // console.log(updateData);

    // this.props.onSubmit(updateData);
    // onChange={this.handleChange}
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} >
        <label>ID: <input value={this.props.id} name="id" size="5" /></label>
        <label>TYPE:  <input value={this.props.type} name="type" size="35" /></label>
        <label>LOCATION:  <input value={this.props.location} name="location" size="15" /></label>
        <button>Update</button>
      </form>
    );
  }
}