import React from 'react';
import { AboutUs } from '../../organisms';
// import { } from '../../organisms';
import { DashboardTemplate } from '../../templates';

export default function DashboardView(): React.ReactElement {
  return (
    <DashboardTemplate>
      <AboutUs />
    </DashboardTemplate>
  );
}
