import React from 'react'

const Greet = (props) => {
  return (
    <div>
      <h2>Hi! this is {props.name} {props.lastName} </h2>
    </div>
  )
}

export default Greet
