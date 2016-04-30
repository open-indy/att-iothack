import React, { PropTypes } from 'react';

const propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.string,
  classNames: PropTypes.string,
};

const defaultProps = {
  classNames: '',
  label: ''
};

const Checkbox = (props) => (
  <span>
    <input type="checkbox" classNames={ props.classNames } name={ props.name } value={ props.value } /> { props.label }
  </span>
);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
