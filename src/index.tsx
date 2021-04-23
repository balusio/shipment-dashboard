import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from 'utils/theme';
import App from 'containers/App/App';
import { BrowserRouter as Router } from 'react-router-dom';

// eslint-disable-next-line no-console
console.log('%c BALU WAS HERE', 'color: #FFFFFF; font-style: bold; background-color: #000000;padding: 20px');

const Root = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
