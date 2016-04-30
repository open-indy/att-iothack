import React from 'react';
import Label from '../../../common/form/label';

const CampaignTargetedCrime = (props) => (
  <div>
    <Label text="Target Campaign:" />
    <select>
      <option>Homocide</option>
      <option>Drug-related</option>
      <option>Burglary</option>
    </select>
  </div>
);
