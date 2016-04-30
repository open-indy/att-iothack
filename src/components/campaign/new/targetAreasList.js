import React from 'react';
import Label from '../../../common/form/label';
import Checkbox from '../../../common/form/checkbox';

const targetAreas = [
  {
    geoLocation: '',
    location: 'brownsburg',
    label: 'Brownsburg, IN'
  },
  {
    geoLocation: '',
    location: 'downtown-indianapolis',
    label: 'Indianapolis, IN (Downtown)'
  }
];

const TargetAreasList = (props) =>  (
  <div>
    <label>Target Area(s)</label>
    <ul>
      {
        targetAreas.map(targetArea => (
          <li>
            <Checkbox
              name="targetArea[]"
              value={ targetArea.location }
              label={ targetArea.label }
            />
          </li>
        ))
      }
    </ul>
  </div>
);

export default TargetAreasList;
