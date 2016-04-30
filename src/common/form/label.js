import React, { PropTypes } from 'react';

const propTypes = {
  text: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

const defaultProps = {
  classNames: ''
};

const Label = (props) => (
    <label>
      { props.text }
    </label>
);

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
