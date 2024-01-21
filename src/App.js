import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import AboutMe from './pages/AboutMe'
import Navbar from './components/Navbar'
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Anthony Pham";
    // Change "New Tab Title" to your desired title
  }, []);
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
