import React from 'react'

import './Card.css'

const Card = ({ header, data }) => {
  return (
    <div className='Card'>
        <h2>{header}</h2>
        <p>{data}</p>
    </div>
  )
}

export default Card