import React from 'react';
import {
  AboutUs,
  CallToAction,
  HowAreWeDifferent,
  LastTime,
  OldMeetsNew,
  OurMission,
  Products,
} from '../../organisms';
import { DashboardTemplate } from '../../templates';

export default function DashboardView(): React.ReactElement {
  return (
    <DashboardTemplate>
      <Products />
      <CallToAction />
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
