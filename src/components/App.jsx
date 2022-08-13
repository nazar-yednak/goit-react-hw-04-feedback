import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { useState } from 'react';
import { Wrapper } from './App.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = { good, neutral, bad };

  const handlelIncrement = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const total = Object.values(state);
    const totalFeddback = total.reduce((acc, elem) => acc + elem, 0);
    return totalFeddback;
  };
  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = state.good;

    return Math.round((positiveFeedback / countTotalFeedback()) * 100);
  };
  return (
    <Wrapper>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onCountFeedback={handlelIncrement}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Wrapper>
  );
}

export default App;
