import { element } from 'prop-types'
import React from 'react'

const Table = ({ list }) => {
  return (
    <div className='table'>
        <table>
            <thead>
                <tr>
                    <th>Recipe</th>
                    <th>Nutrition</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {list && list.map(
                    (element) => (
                        <tr key={element.title}>
                            <td>{element.title}</td>
                            <td>{element.nutrition.nutrients[0].amount} kCal</td>
                            <td>
                                <img
                                    className='recipe-pic'
                                    src={element.image}
                                    alt="Recipe Picturez"
                                    width="100"
                                />
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Table