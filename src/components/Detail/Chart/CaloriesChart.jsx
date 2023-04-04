import React, { useState, useEffect } from 'react'
import { BarChart, XAxis, YAxis, Tooltip, Bar, CartesianGrid, Label } from 'recharts'

const API_KEY = import.meta.env.VITE_APP_API_KEY

const CaloriesChart = () => {
    const [data, setData] = useState([])
  
    useEffect(() => {
      const fetchRecipes = async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=Vietnamese&maxCalories=500`
        )
        const jsonResponse = await response.json()
        const recipesData = jsonResponse.results.map(recipe => ({
          name: recipe.title,
          Calories: recipe.nutrition.nutrients[0].amount,
        }))
        setData(recipesData)

        console.log(recipesData)
      };
  
      fetchRecipes()
    }, [])

    const renderCustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`Dish: ${label}`}</p>
            <p className="intro">{`Calories: ${payload[0].value} kCal`}</p>
          </div>
        );
      }

      return null
    }
  
    return (
      <BarChart
        width={1000}
        height={900}
        data={data}
        margin={{
          top: 10,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          angle={40}
          dx={-30}
          textAnchor="start"   // Anchor the text to the end of the label
          interval={0}       // Display all labels (set to a higher number to display fewer labels)
          height={400}       // Increase the height of the XAxis to accommodate the long labels
          width={700}
          fontSize={16}
        >
          <Label value="Viet Recipe" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis
          label={{
            value: "Calories",
            angle: -90,
            position: "insideleft",
            textAnchor: "middle",
          }}
          width={120}
          angle={-45}
        />
        <Tooltip
          content={renderCustomTooltip}
          wrapperStyle={{ backgroundColor: '#326662', borderColor: 'lightgray', borderRadius: '10px' }}
        />

        <Bar dataKey="Calories" fill="#9fe5e1" />
      </BarChart>
    );
  };
  
  export default CaloriesChart
  