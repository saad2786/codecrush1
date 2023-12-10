

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  Contact,
  Footer,
  Teachers,
  Courses,
} from "./components/index";

import Main from "./components/Main";
import Ebooks from "./components/Ebooks";
import Tutorial from "./components/Tutorial";
import CodingQuestions from "./components/CodingQuestions";
import Roadmap from "./components/Roadmap";
import CodeCards from "./components/CodeCards";
import Homee from "./Pages/Homee/Homee"
import Blog from "./Pages/Blog/Blog";
import Devops from "./components/container/Navbar/Devops";

import Home1 from "./pagess/home/Home1";
import Frontend from "./components/container/Navbar/frontend";
import Backend from "./components/container/Navbar/Backend";
import Fullstack from "./components/container/Navbar/fullstack";



function App() {
  return (
    <>
      {/* // <div className="font-Poppins bg-Solitude">
    //   <Navbar />
    //     <Home />
    //     <About />
    //     <Courses />
    //     <Contact />
    //     <Footer />
    // </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/ebooks/*" element={<Ebooks />}></Route>
          <Route path="/coding/*" element={<CodingQuestions />}></Route>
          <Route path="/tutorial/*" element={<Tutorial />}></Route>
          <Route path="/roadmap/*" element={<Roadmap />}></Route>
          <Route path="/code/*" element={<CodeCards />}></Route>
          <Route path="/blog/*" element={<Homee />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/code/*" element={<CodeCards />}></Route>
          <Route path="/devops/*" element={<Devops />}></Route>
          <Route path="/frontend/*" element={<Frontend />}></Route>
          <Route path="/backend/*" element={<Backend />}></Route>
          <Route path="/fullstack/*" element={<Fullstack />}></Route>
          <Route path="/language/:id" element={<Home1 />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
