import './code.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Check, ContentCopy } from '@mui/icons-material'
import { useState, useEffect } from 'react'

export default function Code({ code, languageType }) {
  const [copy, setCopy] = useState('')
  const [codeString, setCodeString] = useState('')
  useEffect(() => {
    fetch(code)
      .then((r) => r.text())
      .then((result) => {
        setCodeString(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [code])

  return (
    <div className="desc code">
      <div className="codeBlock">
        <div className="codeBlockHeader">
          <p>Example code</p>
          {copy ? (
            <button className="copyButton copied">
              <span className="">
                <Check className="copyIcon " />
              </span>
              Copied
            </button>
          ) : (
            <button
              className="copyButton"
              onClick={() => {
                navigator.clipboard.writeText(codeString)
                setCopy(true)
                setTimeout(() => {
                  setCopy(false)
                }, 3000)
              }}
            >
              <span className="">
                <ContentCopy className="copyIcon" />
              </span>
              Copy code
            </button>
          )}
        </div>

        <SyntaxHighlighter
          language={languageType}
          style={atomOneDark}
          customStyle={{
            padding: '25px',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
