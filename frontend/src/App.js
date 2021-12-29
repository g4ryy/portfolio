import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/AboutMe/About';
import Experiences from "./components/Experiences/Experiences";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
      <Routes>
        <Route path="/portfolio" element={<Home/>} />
        <Route path="/portfolio/about" element={<About/>} />
        <Route path="/portfolio/skills" element={<Skills/>} />
        <Route path="/portfolio/experiences" element={<Experiences/>} />
        <Route path="/portfolio/projects" element={<Projects/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
