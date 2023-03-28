import React from 'react'

import Slider from '../Slider/Slider'
import './Filter.css'

const Filter = ({ input, handleSearch, min, max, onRangeChange, handleChildData }) => {
  return (
    <div className='filter'>
        <input
            className='searchArea'
            type="text"
            placeholder='Find keywords in your recipe...'
            value = {input}
            onChange = {handleSearch}
        ></input>
        <Slider
            min={min}
            max={max}
            onChange={onRangeChange}

            // handleRange={handleRange}
            handleChildData={handleChildData}
        />
    </div>
  )
}

export default Filter