import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import MarsRover from './pages/MarsRover';
import Apod from './pages/Apod';
import Home from './pages/Home'
import Star from './pages/Star'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NatEvents from './pages/NatEvents';
import Calender from './pages/Calender';


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
  return (
    <>
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/apod' component={Apod} />
          <Route path='/marsrover' component={MarsRover} />
          <Route path='/star' component={Star} />
          <Route path='/natural-events' component={NatEvents} />
          <Route path='/calender' component={Calender} />
        </Switch>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
