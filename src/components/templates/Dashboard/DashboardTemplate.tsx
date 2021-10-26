import React from 'react';
import { Footer } from '../../organisms';
// import DashboardErrorFallback from './DashboardErrorFallback';
// import './styles/index.scss';

export default function DashboardTemplate({
  children,
  className,
}: React.PropsWithChildren<any>): React.ReactElement {
  return (
    <div className={`dashboard-template', ${className}`}>
      {/* <Header useStorySquadHeader={useStorySquadHeader} /> */}
      <div id="dashboard-content">
        <div className="dashboard-content-container">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
