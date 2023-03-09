import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
/* import Project from './pages/Project'; */
import ProjectViewerProvider from './context/ProjectViewerContext';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ProjectViewerProvider>
      <div className="App">
        <Router basename="/">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            {/*  <Route path='/:projectId' exact component={Project} /> */}
          </Routes>
        </Router>
      </div>
    </ProjectViewerProvider>
  );
}

export default App;
