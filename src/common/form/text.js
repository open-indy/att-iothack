import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  classNames: PropTypes.string,
};

const defaultProps = {
  value: '',
  classNames: ''
};

const TextInput = (props) => (
    <input type="text" { ...props } />
);

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
