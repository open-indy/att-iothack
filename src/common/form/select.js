import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

const SelectOptions = (props) => (
  <select name={ props.name }>
    {
      props.options.map(option => (
        <option value={ option.value } selected={ !!option.selected } />
      ))
    }
  </select>
);

SelectOptions.propTypes = propTypes;

export default SelectOptions;
