import react from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/nav';
import Skill from './components/Skill';


function App() {
  return (
    <div className="App">
     <div>
      <Nav/>
     <Home/>
     <About/>
     <Skill/>
     <Contact/>
     </div>
    </div>
  );
}

export default App;
