import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import MarsRover from './pages/MarsRover';
import Apod from './pages/Apod';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


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
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/apod' component={Apod} />
          <Route path='/marsrover' component={MarsRover} />
        </Switch>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
