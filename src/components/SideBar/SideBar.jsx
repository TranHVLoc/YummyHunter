import React from 'react'

import './SideBar.css'

const SideBar = () => {
  return (
    <div className='SideBar'>

      <div className='Header'>
        <span>🍔 😋 YummyHunter</span>
      </div>

      <div className='Menu'>
        <ul>
          <li className='menu-item'>
            <a className='menu-link' href='/'>
              <div>🏠 Dashboard</div>
            </a>
          </li>

          <li className='menu-item'>
            <a className='menu-link' href='/'>
              <div>🔎 Search</div>
            </a>
          </li>

          <li className='menu-item'>
            <a className='menu-link' href='/'>
              <div>ℹ️ About</div>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default SideBar