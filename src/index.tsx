import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from 'utils/theme';
import App from 'containers/App/App';

const Root = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
