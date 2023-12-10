import './language.scss'

import Examples from '../examples/Examples'
import Code from '../Code/Code'

function createList(subTopic) {
  return (
    <ul className="desc">
      {subTopic.isList &&
        subTopic?.desc.map((subTopic) => {
          return (
            <li className="listItem" key={subTopic.id}>
              <span className="listTitle">{subTopic?.title} </span>
              <span className="listDesc">{subTopic?.desc}</span>
              {subTopic.code && <Code code={subTopic.code} />}
            </li>
          )
        })}
    </ul>
  )
}

function Language({
  type,
  content,
  language,
  languageType,
  setContentIndex,
  contentIndex,
}) {
  let chapter = language.find((data) => {
    return data.title === content
  })
  const topics = chapter?.topics
  const contentLength = language.length
  function nextContentIndex() {
    setContentIndex(function (index) {
      return index + 1
    })
  }
  function previousContentIndex() {
    setContentIndex(function (index) {
      return index - 1
    })
  }
  if (!chapter) {
    return (
      <div className="contentContainerLeft">
        <div className="title">This Page Is Under Process 🪲</div>
      </div>
    )
  }

  return (
    <>
      <div className="contentContainer">
        {!topics ? (
          <div className="contentContainerLeft">
            <div className="title">This Page Is Under Process 🪲</div>
          </div>
        ) : (
          <>
            <div className="contentContainerLeft">
              <div className="title">{chapter?.title}</div>
              <div className="content">
                {chapter.defination && (
                  <p className="defination">{chapter?.defination}</p>
                )}
                <ul>
                  {topics.map((topic) => {
                    return (
                      <li key={topic.id}>
                        <div className="subTitle">{topic.title}</div>
                        <div className="desc">
                          {topic.isList ? createList(topic) : topic.desc}
                          {topic.isExample && <Examples topic={topic} />}
                          {topic.code && (
                            <Code
                              code={topic.code}
                              languageType={languageType}
                            />
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="btns">
                <div
                  className={`previous ${
                    contentIndex === 1 ? 'invisible' : ''
                  }`}
                  onClick={previousContentIndex}
                >
                  Previous
                </div>
                <div
                  className={`next ${
                    contentIndex === contentLength ? 'invisible' : ''
                  }`}
                  onClick={nextContentIndex}
                >
                  Next
                </div>
              </div>
            </div>
          </>
        )}
        <div className="contentContainerRight">Advertisment</div>
      </div>
    </>
  )
}

// console.log(chapter)

export default Language
