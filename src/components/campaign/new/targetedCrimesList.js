import React from 'react';
import Label from '../../../common/form/label';
import SelectList from '../../../common/form/select';

<<<<<<< HEAD
=======
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

>>>>>>> master
const TargetedCrimesList = (props) => (
  <div>
    <Label text="Target Campaign:" />
    <SelectList
      name="targeted-crimes"
      defaultOption="homocide"
<<<<<<< HEAD
      options={ props.crimes }
=======
      options={ crimes }
>>>>>>> master
    />
  </div>
);

export default TargetedCrimesList;
