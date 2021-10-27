import React from 'react';
import { errorDragon } from '../../../assets/';
import { Button, Picture } from '../../atoms';
import './styles/dashboardErrorFallback.scss';

export default function DashboardErrorFallback(): React.ReactElement {
  return (
    <div className="dashboard-error-fallback">
      <h2>Uh Oh!</h2>
      <p>Something went wrong:</p>
      <Picture
        source={errorDragon}
        description="Blaze the dragon in a box"
        disablePreview
      />
      <Button onClick={window.location.reload}>Reload Dashboard</Button>
    </div>
  );
}
