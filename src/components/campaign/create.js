import React, { PropTypes } from 'react';

const CreateCampaign = (props) => (
  <div>
    <div>
      <label>Name:</label>
      <input type="text" name="name" id="campaign-name" class="create-campaign" value="" />
    </div>
  </div>
);

export default CreateCampaign;
