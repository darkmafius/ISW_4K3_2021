import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Principal from './Principal';
import Formulario from './Formulario';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/formulario" component={Formulario} />
      </Switch>
    </Router>
  );
}

export default App;
