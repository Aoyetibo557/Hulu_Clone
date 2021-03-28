import React, { useState } from 'react'
import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Results from './component/Results';
import requests from './requests';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Watchlist from './component/Watchlist';
import Login from './component/Login';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="app">
     <Router>
       <Switch>
          <Route exact path="/" component="">
              <Header />
              <Nav setSelectedOption={setSelectedOption} />
              <Results selectedOption={selectedOption} />
          </Route>

          <Route exact path="/watchlist" conponenet="">
              <Header />
              <Watchlist />
          </Route>

           <Route exact path="/login" conponenet="">
             <Login />
          </Route>

       </Switch>
     </Router>
    </div>
  );
}

export default App;
