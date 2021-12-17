import Home from "./components/Home/Home";
import './App.css';
import './styles.css';
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
    </div>
  );
}

export default App;
