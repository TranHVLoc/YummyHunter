import React from 'react'

import Slider from '../Slider/Slider'
import './Filter.css'

const Filter = ({ input, handleChange, min, max, onRangeChange }) => {
  return (
    <div className='filter'>
        <input
            type="text"
            placeholder='Find keywords in your recipe...'
            value = {input}
            onChange = {handleChange}
        ></input>
        <Slider
            min={min}
            max={max}
            onChange={onRangeChange}
        />
    </div>
  )
}

export default Filter