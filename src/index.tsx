import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';  
const App = (): JSX.Element => (
  <>
   <Button variant="contained" color="primary">
      Hello World
    </Button>
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
