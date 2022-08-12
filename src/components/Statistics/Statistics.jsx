import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import { StatisticList } from './Statistics.styled';
import { Title } from 'components/Section/Section.styled';
import React from 'react';
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <Title>Statistics</Title>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticList>
          <li>
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
          <li>
            Total: <span>{total}</span>
          </li>
          <li>
            Positive feedback: <span>{positivePercentage}</span>%
          </li>
        </StatisticList>
      )}
    </>
  );
}

export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
