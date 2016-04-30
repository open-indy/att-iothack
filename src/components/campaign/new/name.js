import React, { PropTypes } from 'react';
import Label from '../../../common/form/label';
import TextInput from '../../../common/form/text';

const CampaignNameField = (props) => (
  <li>
    <Label text="Name:" />
    <TextInput name="campaign-name" value="" />
  </li>
);

export default CampaignNameField;
