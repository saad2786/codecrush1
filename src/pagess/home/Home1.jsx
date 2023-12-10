import React, { useEffect, useState } from 'react'
import Navbar1 from '../../components/dashboard_cont/Navbar/Navbar'
import Sidebar from '../../components/dashboard_cont/Sidebar/Sidebar'
import Language from '../../components/dashboard_cont/Language/Language'
import { Cpp } from '../../components/languages/C++/cpp'
import { Java } from '../../components/languages/Java/java'
import { Python } from '../../components/languages/Python/python'
import { C } from '../../components/languages/Clanguage/C'
import { Javascript } from '../../components/languages/Javascript/javascript'
import './home.scss'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../../components'
function Home1() {
  const [topic, setTopic] = useState(Cpp)
  const [contentIndex, setContentIndex] = useState(1)
  const [content, setContent] = useState(topic[0].title)
  const [language, setLanguage] = useState('cpp')
  const [menu, toggleMenu] = useState(false)

  const location = useLocation()
  const [screenSize, setScreenSize] = useState(getWindowSize())
  function handleChangeContent(title) {
    const index = topic.find((item) => {
      return item.title === title
    }).id

    setContent(title)
    setContentIndex(index)
  }
  function getWindowSize() {
    const { innerWidth } = window
    return innerWidth
  }

  //Responsiveness handling
  useEffect(
    function () {
      function handleWindowSize() {
        setScreenSize(getWindowSize())
      }
      window.addEventListener('resize', handleWindowSize)
      if (screenSize > 900) {
        toggleMenu(false)
      }
    },
    [setScreenSize, screenSize],
  )
  //Assigning index to content
  useEffect(
    function () {
      topic.find(function (subTopic) {
        if (subTopic.id === contentIndex) {
          setContent(subTopic.title)
        }
        return null
      })
    },
    [topic, contentIndex],
  )
  useEffect(
    function () {
      setContent(topic[0].title)
      setContentIndex(1)
    },
    [topic],
  )
  //choosing data file among(Cpp, Java, Javascript, Python, C)
  useEffect(() => {
    if (location) {
      let language = location.pathname
        .slice(location.pathname.lastIndexOf('/'), location.pathname.length)
        .substring(1)
      switch (language) {
        case 'C':
          language = C
          setLanguage('cpp')
          break
        case 'C++':
          language = Cpp
          setLanguage('cpp')
          break
        case 'Java':
          language = Java
          setLanguage('java')
          break
        case 'Javascript':
          language = Javascript
          setLanguage('javascript')
          break
        case 'Python':
          language = Python
          setLanguage('python')
          break

        default:
          break
      }

      setTopic(() => language)
    }
  }, [location])
  return (
    <>

        <Navbar />
    <div className="home">
      <Sidebar
        onSelectRow={handleChangeContent}
        content={topic}
        contentTitle={content}
        menu={menu}
      />
      <div className="homeContainer">
        <Navbar1 toggleMenu={toggleMenu} menu={menu} />
        <div className="widgets" onClick={() => toggleMenu(false)}>
          <Language
            type="user"
            language={topic}
            content={content}
            languageType={language}
            setContentIndex={setContentIndex}
            contentIndex={contentIndex}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home1
