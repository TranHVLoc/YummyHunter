import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import RecipeInfo from './components/Home/RecipeInfo/RecipeInfo'
import SideBar from './components/SideBar/SideBar'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='layout'>
        <SideBar />
        <div className='content'>
          <Routes>
            <Route index={true} path="/" element={<App />} />
            <Route index={false} path='/recipeInfo/:id' element={<RecipeInfo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
