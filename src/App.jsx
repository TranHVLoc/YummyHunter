import React, { useState, useEffect } from 'react'

import './App.css'

import SideBar from './components/SideBar/SideBar'
import Card from './components/Home/Card/Card'
import Filter from './components/Home/Filter/Filter'
import Table from './components/Home/Table/Table'

const API_KEY = import.meta.env.VITE_APP_API_KEY

function App() {

  // List from API call
  const [output, setOutput] = useState({})

  const [input, setInput] = useState('')

  const [filterResults, setFilterResults] = useState([])

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(1000)

  /**
   * Immediately display data on page load
   */
  useEffect(() => {
    const fetchAllRecipeData = async () => {
      const response = await fetch(
        // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&minCalories=0&maxCalories=1000&number=5`
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=15c7acf394544de79912a0027b8bab31&minCalories=0&maxCalories=1000&number=100`
      )

      const json = await response.json()
      setOutput(json)

      console.log(json)
    }

    fetchAllRecipeData().catch(console.error)
  }, [])

  const searchItems = (searchValue) => {
    setInput(searchValue)
    if (searchValue !== "") {
      const filteredData = output.results.filter((item) =>
        item.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      )
      setFilterResults(filteredData)
    } else {
      setFilterResults(output.results)
    }
  }


  const filterRange = () => {
    if (min !== 0 || max !== 1000) {
      const filteredData = output.results.filter((item) =>
        item.nutrition.nutrients[0].amount >= min && item.nutrition.nutrients[0].amount <= max
      )
      setFilterResults(filteredData)
    } else {
      setFilterResults(output.results)
    }
  }

  const handleChildData = ({childMin, childMax}) => {
    setMin(childMin)
    setMax(childMax)
  }

  useEffect(() => {
    console.log(min, " ", max)
  }, [input])
  
  return (
    <div className="App">
      <SideBar />

      <div className='app-page'>
        <div className='app-row'>
          <Card
            header="Recipe Displayed"
            data = {output.number}
          />
          <Card
            header="Total Recipe Founded"
            data = {output.totalResults}
          />
          <Card
            header="500kCal+ Dishes Founded"
            data={63}
          />
        </div>

        <div className='app-row'>
          <div className='List'>
            <Filter
              handleSearch = {(e) => searchItems(e.target.value)}

              // handleRange = {filterRange}
              handleChildData = {handleChildData}

              min = {min}
              max = {max}
              onRangeChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
            {
              input.length > 0
                ? <Table
                    list={filterResults}
                  />
                : <Table
                    list = {output.results}
                  />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
