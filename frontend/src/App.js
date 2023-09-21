import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Test1 from "./pages/Resume-test1/Test1";
import { useState, createContext } from "react";
import Test2 from "./pages/Resume-test2/Test2";
import Test3 from "./pages/Resume-test3/Test3";
import Test4 from "./pages/Resume-test4/Test4";
import ResumePage from "./pages/resume.page/resume";
import Login from "./pages/Login-page/login";
import Signup from "./pages/Signup-page/signup";
import History from "./pages/history.page/history-page";

export const resumeCont = createContext();


function App() {
  const [inform, setInform] = useState({
    fullname: '', address: '', phone: '', email: '', portfolio: '', linkedIn: '', degree: '', institution: '', graduate: '',
    skillData: [], langData: [], hobbData: [], experData: [], projData: [],
  })
  return (
    <>
      <Router>
        <Routes>


        </Routes>
        <resumeCont.Provider value={{ inform, setInform }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="history" element={<History />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Test1 />} />
            <Route path="/education" element={<Test2 />} />
            <Route path="/skills" element={<Test3 />} />
            <Route path="/experience" element={<Test4 />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </resumeCont.Provider>
      </Router>
    </>
  );
}

export default App;
