import React from 'react'

function coche({matricula,precio}) {
  return (
    <div>
        <h2>Matricula {matricula} </h2>
        <h3>Y é precio és {precio} </h3>
    </div>
  )
}

export default coche