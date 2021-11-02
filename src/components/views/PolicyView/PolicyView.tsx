import React from 'react';
import { PrivacyPolicy } from '../../molecules';
import { DashboardTemplate } from '../../templates';

export default function TermsView(): React.ReactElement {
  return (
    <DashboardTemplate>
      <PrivacyPolicy />
    </DashboardTemplate>
  );
}
