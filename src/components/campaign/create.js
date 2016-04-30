import React, { PropTypes } from 'react';

const CreateCampaign = (props) => (
  <div>
    <ul>
      <li>
        <label>Name:</label>
        <input type="text" name="name" id="campaign-name" class="create-campaign" value="" />
      </li>
      <li>
<<<<<<< Updated upstream:src/components/campaign/create.js
        <label>Target Campaign:</label>
        <select>
          <option>Homocide</option>
          <option>Drug-related</option>
          <option>Burglary</option>
        </select>
=======
        <TargetedCrimesList { ...props } />
>>>>>>> Stashed changes:src/components/campaign/new/index.js
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
