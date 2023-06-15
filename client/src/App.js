import './App.css';
import './views/GeneralStyle/GeneralStyle.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
import Project from './views/Project/Project';
import Contact from './views/Contact/contact';
import Popup from './components/Popup/Popup';


function App() {
  return (
    <div className= "App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div className='main'>
            <Home />
          </div>
        </Route>

        <Route exact path='/about'>
          <div className='main'>
            <About />
          </div>
        </Route>

        <Route exact path='/portfolio'>
          <div className='main'>
            <Project />
          </div>
          {/* Popup Component */}
          <Popup />
        </Route>

        <Route exact path='/contact'>
          <div className='main'>
            <Contact />
          </div>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
