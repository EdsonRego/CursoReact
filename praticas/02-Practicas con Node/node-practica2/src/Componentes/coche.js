import React from 'react'

function coche(props) {
  return (
    <div>
        <h2>Matricula {props.matricula} </h2>
        <h3>Y é precio és {props.precio} </h3>
    </div>
  )
}

export default coche