import React from 'react'
import { Link } from 'react-router-dom'
import './widget.scss'
const Widget = ({ title, desc }) => {
  return (
    <div className="widget">
      <h1 className="title">{title}</h1>
      <p className="desc">{desc}</p>
      <Link to={'/language/' + title}>
        <button >Learn</button>
      </Link>
    </div>
  )
}

export default Widget
