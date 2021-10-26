import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DashboardTemplate } from './components/templates';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Switch>
        {/* Public Routes */}
        {/* Private Routes */}
        <Route exact path="/" component={DashboardTemplate} />
      </Switch>
    </div>
  );
};

export default App;
