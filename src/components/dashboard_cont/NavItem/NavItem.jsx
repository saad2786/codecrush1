import './navItem.scss'
import { NavLink } from 'react-router-dom'

export default function NavItem() {
  return (
    <div className="item links">
      <NavLink to="/language/C">
        <div className="link">
          <span>C</span>
        </div>
      </NavLink>
      <NavLink to="/language/C++">
        <div className="link">
          <span>C++</span>
        </div>
      </NavLink>
      <NavLink to="/language/Java">
        <div className="link">
          <span>Java</span>
        </div>
      </NavLink>
      <NavLink to="/language/Python">
        <div className="link">
          <span>Python</span>
        </div>
      </NavLink>
      <NavLink to="/language/Javascript">
        <div className="link">
          <span>Javascript</span>
        </div>
      </NavLink>
    </div>
  )
}
