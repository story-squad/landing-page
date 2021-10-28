import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DashboardView, TermsView } from './components';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={DashboardView} />
        <Route path="/termsofservice" render={TermsView} />
      </Switch>
    </div>
  );
};

export default App;
