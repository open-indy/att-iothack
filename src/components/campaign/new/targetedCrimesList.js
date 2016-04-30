import React from 'react';
import Label from '../../../common/form/label';
import SelectList from '../../../common/form/select';

const crimes = [
  {
    value: 'drug-related',
    label: 'Drug-related'
  },
  {
    value: 'burglary',
    label: 'Burglary'
  },
  {
    value: 'homocide',
    label: 'Homocide'
  }
]

const TargetedCrimesList = (props) => (
  <div>
    <Label text="Target Campaign:" />
    <SelectList
      name="targeted-crimes"
      defaultOption="homocide"
      options={ crimes }
    />
  </div>
);

export default TargetedCrimesList;
