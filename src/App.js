import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import AboutMe from './pages/AboutMe'
import ProjectDisplay from './pages/ProjectDisplay'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Anthony Pham";
    // Change "New Tab Title" to your desired title
  }, []);
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );

}

export default App;
