import './App.css';
import './views/GeneralStyle/GeneralStyle.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
import Project from './views/Project/Project';
import Contact from './views/Contact/Contact';

import Popup from './components/Popup/Popup';
import NavBar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [mainOn, setMainOn] = useState(false);
  const [pageLoaderOn, setPageLoaderOn] = useState(true);
  const [sectionOn, setSectionOn] = useState(false);
  const [popUpOn, setpopUpOn] = useState(false);

  useEffect(() => {
    runAnimation();
  }, [])

  const runAnimation = () => {
    setMainOn(true);
    setSectionOn(true);

    setTimeout(() => {
      setPageLoaderOn(false)
    }, 700)
  }

  const toggleSection = () => {
    setSectionOn(!sectionOn);
  }

  const togglepopUp = () => {
    setpopUpOn(!popUpOn);
  }

  return (
    <div className= "App">

      {/* Page Loader Start */}
      <div className={pageLoaderOn? "page-loader": "page-loader fade-out disappear"}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Page Loader End */}

      {/* Background Circles Start*/}

      <div className="bg-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
      </div>

      {/* Background Circles End */}

      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div className={mainOn? "main" : "main hidden"}>
            <Home sectionOn = {sectionOn} />
            <NavBar toggleSection = {toggleSection} />
          </div>
        </Route>

        <Route exact path='/about'>
          <div className={mainOn? "main" : "main hidden"}>
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
          <div className={mainOn? "main" : "main hidden"}>
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
