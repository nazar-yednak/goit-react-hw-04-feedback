import PropTypes from 'prop-types';

import React from 'react';
import { Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onCountFeedback }) {
  return options.map(option => (
    <Button key={option} onClick={() => onCountFeedback(option)}>
      {option}
    </Button>
  ));
}

export default FeedbackOptions;
FeedbackOptions.propType = {
  options: PropTypes.number,
  onCountFeedback: PropTypes.func,
};
