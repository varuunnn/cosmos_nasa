import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import MarsRover from './components/MarsRover';
//import Apod from './components/Apod';

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
    <div className="App">
      <ThemeProvider theme={theme}>
      <MarsRover />
      </ThemeProvider>
    </div>
  );
}

export default App;
