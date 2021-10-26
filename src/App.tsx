import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DashboardView } from './components/views';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Switch>
        {/* Public Routes */}
        {/* Private Routes */}
        <Route exact path="/" component={DashboardView} />
      </Switch>
    </div>
  );
};

export default App;
