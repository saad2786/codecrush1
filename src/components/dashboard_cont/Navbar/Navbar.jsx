import { Menu } from '@mui/icons-material'
import LanguageIcon from '@mui/icons-material/Language'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded'

import React, { useContext } from 'react'
import './navBar.scss'
// import { DarkModeContext } from '../../Context/DarkMode/darkModeContext'
import { NavLink } from 'react-router-dom'
import NavItem from '../NavItem/NavItem'
function Navbar({ toggleMenu, menu }) {
  // const { dispatch } = useContext(DarkModeContext)
  return (
    <div className="navBar">
      <div className="wrapper">
        <div className="menu" onClick={() => toggleMenu((menu) => !menu)}>
          <Menu />
        </div>
        <div className="brand">{!menu && <h3>CodeCrush</h3>}</div>
        <div className="items">
          <NavItem />
          <div
            className="item"
            onClick={() => {
              dispatch({ type: 'TOGGLE' })
            }}
          >
            {/* <DarkModeIcon className="icon" /> */}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
