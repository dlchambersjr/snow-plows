import React from 'react';
import plowData from '../data/data.json'
import Form from './form.js';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plows: plowData,
      formData: [],
      formView: false
    };
  }

  editPlow = (plowId) => {
    let plowForm = this.state.plows[plowId];
    this.setState(this.formData = plowForm, this.formView = true);
  }

  render() {
    return (
      <React.Fragment >
        <ul>
          {this.state.plows.map((plow, index) => {
            return <li key={index}>
              Plow ID: {plow.id} Type: {plow.plowType} Location: {plow.location}
              <button onClick={() => this.editPlow(index)}>EDIT</button>
            </li>
          })}
        </ul>
        {/* <Form data={this.formData} /> */}

      </React.Fragment >
    )
  }


}

export default List;

