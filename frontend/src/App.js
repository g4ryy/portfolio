import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/AboutMe/About';
import Experiences from "./components/Experiences/Experiences";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills/Skills";


import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Projects from "./components/Projects/Projects";


function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/experiences" element={<Experiences/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
