import React, { useEffect } from 'react'
import './sideBar.scss'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Sidebar({ onSelectRow, content, menu, contentTitle }) {
  const [isSelected, setIsSelected] = useState()
  const location = useLocation()
  const [heading, setHeading] = useState()

  function handleClick(e) {
    const title = e.target.textContent
    setIsSelected(() => {
      return title
    })
    onSelectRow(title)
  }
  useEffect(
    function () {
      setIsSelected(() => content[0].title)
    },
    [content],
  )
  useEffect(() => {
    if (location) {
      let language = location.pathname
        .slice(location.pathname.lastIndexOf('/'), location.pathname.length)
        .substring(1)
      setHeading(language)
    }
  }, [location])

  useEffect(
    function () {
      setIsSelected(() => contentTitle)
    },
    [contentTitle],
  )
  return (
    <div className={` ${menu ? 'toggleSideBar' : 'sideBar'}`}>
      {/* <div className="top"> */}
        {/* <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">CodeCrush</span>
        </Link> */}
      {/* </div>
      <hr /> */}
      <div className="center">
        <ul className="centerList">
          <p className="title">{heading} Language</p>
          {content.map((topic, index) => {
            return (
              <li
                key={topic.id}
                onClick={handleClick}
                className={isSelected === topic.title ? 'selected' : ''}
              >
                <span>{topic.title}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
