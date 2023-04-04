import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './SideBar.css'

const SideBar = () => {
  return (
    <div className='SideBar'>

      <nav>
        <div className='Header'>
          <Link to="/">
            <span>🍔 😋 YummyHunter</span>
          </Link>
        </div>

        <div className='Menu'>
          <ul>
            <li className='menu-item'>
              <Link to="/">
                <div><span>🏠 Dashboard</span></div>
              </Link>
            </li>

            <li className='menu-item'>
              <Link to="/">
                <div><span>ℹ️ About</span></div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />

    </div>
  )
}

export default SideBar