import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import MarsRover from './pages/MarsRover';
import Apod from './pages/Apod';
import Home from './pages/Home'
import Star from './pages/Star'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NatEvents from './pages/NatEvents';
import Calender from './pages/Calender';
import { auth } from './firebase';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#00ffff',
      dark: '#ffffff',
      contrastText: '#00ffff',
    },
  },
});

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  auth.onAuthStateChanged((user) => {
    if(user) {
      return setIsLoggedIn(true)
    }
    setIsLoggedIn(false)
  })


  return (
    <>
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact render={() => (<Home isLoggedIn={isLoggedIn}/> )} />
          <Route path='/apod' render={() => !isLoggedIn ? (<Redirect to='/'/>) : (<Apod isLoggedIn={isLoggedIn}/>)} />
          <Route path='/marsrover' render={() => !isLoggedIn ? (<Redirect to='/'/>) : (<MarsRover isLoggedIn={isLoggedIn}/>)} />
          <Route path='/star' render={() => !isLoggedIn ? (<Redirect to='/'/>) : (<Star />)} />
          <Route path='/natural-events' render={() => !isLoggedIn ? (<Redirect to='/'/>) : (<NatEvents isLoggedIn={isLoggedIn}/>)} />
          <Route path='/calender' render={() => !isLoggedIn ? (<Redirect to='/'/>) : (<Calender />)} />
        </Switch>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
