import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details/Details';
import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';

function App() {

  const [team, setTeam] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4335`)
        .then(res => res.json())
        .then(teamData => setTeam(teamData.teams))
    }, [])

  return (
    
    <div className="App">
        <Router>
          <Switch>
            <Route path="/details/:id">
              <Details/>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home team={team}></Home>
            </Route>        
          </Switch>
        </Router>
      </div>
    
      


    
  );
}

export default App;
