import './App.css';
import './views/GeneralStyle/GeneralStyle.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';


function App() {
  return (
    <div className="App">
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
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;