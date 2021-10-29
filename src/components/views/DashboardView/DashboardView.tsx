import React from 'react';
import {
  AboutUs,
  HowAreWeDifferent,
  LastTime,
  OldMeetsNew,
  OurMission,
} from '../../organisms';
import { DashboardTemplate } from '../../templates';

export default function DashboardView(): React.ReactElement {
  return (
    <DashboardTemplate>
      <LastTime />
      <OurMission />
      <HowAreWeDifferent />
      <OldMeetsNew />
      {/* Stream section needs more work */}
      {/* <Stream /> */}
      <AboutUs />
    </DashboardTemplate>
  );
}
