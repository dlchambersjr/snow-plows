import React from 'react';

import './plow.css';

export default class Plow extends React.Component {

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Plow ID</th>
              <th>Type</th>
              <th>location</th>
            </tr>
            {this.props.plows.map((plow, index) => {
              return <tr key={index}>
                <td>{plow.id}</td>
                <td>{plow.type}</td>
                <td>{plow.location}</td>
                <td><button id={index} onClick={() => this.props.onSubmit(index)}>EDIT</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div >
    )
  }
}