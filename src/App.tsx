import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';
import Home from './pages/Home';
import ProjectDisplay from './pages/ProjectDisplay';
import Projects from './pages/Projects';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:id" element={<ProjectDisplay />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
