import { createTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import './App.css';
import { Navbar } from './components/Navbar';
import { DashboardPage } from './pages/DashboardPage';
import { ShipmentsPage } from './pages/ShipmentsPage';


const theme = createTheme({
  palette: {
    primary: {
      main: '#71C879',
    },
    secondary: {
      main: '#D91C5C'
    }
  },
  typography: {
    subtitle1: {
      fontSize: 18,
      lineHeight: '22px',
      fontWeight: 'bold',

    },
    h4: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: '10px'
    }

  },
})

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/shipments">
            <ShipmentsPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
