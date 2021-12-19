import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/AboutMe/About';
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills"
import Navigation from "./components/Navigation";
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
