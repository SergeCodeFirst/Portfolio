import './App.css';
import './views/GeneralStyle/GeneralStyle.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
import Project from './views/Project/Project';
import Contact from './views/Contact/Contact';

import Popup from './components/Popup/Popup';
import NavBar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [sectionOn, setSectionOn] = useState(true);
  const [popUpOn, setpopUpOn] = useState(false);

  const toggleSection = () => {
    setSectionOn(!sectionOn);
  }

  const togglepopUp = () => {
    setpopUpOn(!popUpOn);
  }
  return (
    <div className= "App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div className='main'>
            <Home sectionOn = {sectionOn} />
            <NavBar toggleSection = {toggleSection} />
          </div>
        </Route>

        <Route exact path='/about'>
          <div className='main'>
            <About sectionOn = {sectionOn} />
            <NavBar toggleSection = {toggleSection} />
          </div>
        </Route>

        <Route exact path='/portfolio'>
          <div className={popUpOn? "main fade-out" :'main'}>
            <Project togglepopUp={togglepopUp} sectionOn = {sectionOn} />
            <NavBar toggleSection = {toggleSection} />
          </div>
          {/* Popup Component */}
          <Popup popUpOn={popUpOn} togglepopUp={togglepopUp}/>
        </Route>


        <Route exact path='/contact'>
          <div className='main'>
            <Contact sectionOn = {sectionOn} />
            <NavBar toggleSection = {toggleSection} />
          </div>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
