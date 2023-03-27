import React, { useState, useEffect } from 'react'

import './App.css'

import SideBar from './components/SideBar/SideBar'
import Card from './components/Home/Card/Card'
import Filter from './components/Home/Filter/Filter'
import Table from './components/Home/Table/Table'

const ACCESS_KEY = import.meta.env.VITE_APP_API_KEY 

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
        // `https://api.spoonacular.com/recipes?apiKey=${API_KEY}${inputVal === "" ? "" : "&query=" + inputVal}&maxFat=105`
        // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${ACCESS_KEY}&minCalories=105`
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=2937d7b708e34ad7bbd366d5eac13c59&minCalories=0&number=100`
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
            // data={output.results.filter((dish) => dish.nutrition.nutrients[0].amount > 500).length}
          />
        </div>

        <div className='app-row'>
          <div className='List'>
            <Filter
              handleChange = {(e) => searchItems(e.target.value)}

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
