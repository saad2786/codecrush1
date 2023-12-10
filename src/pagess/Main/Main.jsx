import './main.scss'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/Widget/Widget'

const Main = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <Navbar />
        <div className="section">
          <h1 className='text-xl'>Programming Languages</h1>
          <div className="widgets">
            <Widget title="C" desc="A programming language" />
            <Widget title="C++" desc="A programming language" />
            <Widget
              title="Javascript"
              desc="The language for programming web pages"
            />
            <Widget title="Java" desc="A programming language" />
            <Widget
              title="Python"
              desc="A programming language most popular and use in AL and ML"
            />
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Main
