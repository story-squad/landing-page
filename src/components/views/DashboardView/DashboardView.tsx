import React from 'react';
import { AboutUs, HowAreWeDifferent, OldMeetsNew } from '../../organisms';
import { DashboardTemplate } from '../../templates';

export default function DashboardView(): React.ReactElement {
  return (
    <DashboardTemplate>
      <HowAreWeDifferent />
      <OldMeetsNew />
      {/* Stream section needs more work */}
      {/* <Stream /> */}
      <AboutUs />
    </DashboardTemplate>
  );
}
