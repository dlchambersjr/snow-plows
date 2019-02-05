import React from 'react';

const Form = props => {
  return (
    <div>
      <h1>{props.data.plowID}</h1>
      <h1>{props.data.plowType}</h1>
      <h1>{props.data.location}</h1>
    </div>
  )
}

export default Form;