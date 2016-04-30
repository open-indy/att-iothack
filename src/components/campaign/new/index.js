import React, { PropTypes } from 'react';
import CampaignNameField from './name';
import TargetedCrimesList from './targetedCrimes';

const CreateCampaign = (props) => (
  <div>
    <ul>
      <li>
        <CampaignNameField />
      </li>
      <li>
        <TargetedCrimesList />
      </li>
      <li>
        <label>Target Area(s)</label>
        <ul>
          <li>
            <input type="checkbox" name="targetArea[]" value="Brownsburg" /> Brownsburg, IN
          </li>
          <li>
            <input type="checkbox" name="targetArea[]" value="Downtown-Indianapolis" /> Indianapolis, IN (downtown)
          </li>
        </ul>
      </li>
      <li>
        <label>Control Area(s)</label>
        <ul>
          <li>
            <input type="checkbox" name="controlArea[]" value="Brownsburg" /> Brownsburg, IN
          </li>
          <li>
            <input type="checkbox" name="controlArea[]" value="Downtown-Indianapolis" /> Indianapolis, IN (downtown)
          </li>
        </ul>
      </li>
      <li>
        <label>Goals</label>
        <ul>
          <li>
            <input type="text" name="goal" value="" alt="Enter a goal" />
            <button>Add</button>
          </li>
        </ul>
      </li>
      <li>
        <label>Strategies</label>
        <ul>
          <li>
            <input type="text" name="strategy" value="" alt="Enter a strategy" />
            <button>Add</button>
          </li>
        </ul>
        Suggested Strategies for the Target Areas and Targeted Crime based on previous campaigns:
        <ul>
          <li>No Data Available.</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default CreateCampaign;
