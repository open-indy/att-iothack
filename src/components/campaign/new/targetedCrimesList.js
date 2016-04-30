import React from 'react';
import Label from '../../../common/form/label';
import SelectList from '../../../common/form/select';

const TargetedCrimesList = (props) => (
  <div>
    <Label text="Target Campaign:" />
    <SelectList
      name="targeted-crimes"
      defaultOption="homocide"
      options={ props.crimes }
    />
  </div>
);

export default TargetedCrimesList;
