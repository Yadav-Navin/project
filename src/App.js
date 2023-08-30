import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Service from './Component/Service';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

// import './App.css';

function App() {
  return (
    <div className="App">
          <Router>
            <Navbar />
              <Routes>
                <Route exact path="/" element={ <Home/> }/>
                <Route exact path="/contact" element={ <Contact/> }/>
                <Route exact path="/about" element={ <About/> }/>
                <Route exact path="/service" element={ <Service/> }/>
              </Routes>
          </Router>
    </div>
  );
}

export default App;
