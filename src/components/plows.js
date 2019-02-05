import React from 'react';

const Plow = props => {

  return (
    < div >
      <li>Plow ID: {props.id} </li>
      <li>Type: {props.type}</li>
      <li>Location: {props.location}</li>
    </div >
  )
}

export default Plow;