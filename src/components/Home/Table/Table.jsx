import React from 'react'
import { Link } from 'react-router-dom'

import './Table.css'

const Table = ({ list }) => {
  return (
    <div className='table'>
        <table>
            <thead className='header'>
                <tr>
                    <th>Recipe</th>
                    <th>Nutrition</th>
                    <th>Image</th>
                    <th>See Detail</th>
                </tr>
            </thead>
            <tbody className='body'>
                {list && list.map(
                    (element) => (
                        <tr key={element.title}>
                            <td>{element.title}</td>
                            <td>{element.nutrition.nutrients[0].amount} kCal</td>
                            <td>
                                <img
                                    className='recipe-pic'
                                    src={element.image}
                                    alt="Recipe Picture"
                                    width="100"
                                />
                            </td>
                            <td>
                                <Link
                                    to={`/recipeInfo/${element.id}`}
                                    key={element.id}
                                >    
                                    🔗 Click here
                                </Link>
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