import PropTypes from 'prop-types';
import css from 'components/Feedback/Feedback.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={`${css.statisticsList}`}>
      <li className={`${css.statisticsItem}`}>Good: {good}</li>
      <li className={`${css.statisticsItem}`}>Neutral: {neutral}</li>
      <li className={`${css.statisticsItem}`}>Bad: {bad}</li>
      <li className={`${css.statisticsItem}`}>Total: {total}</li>
      <li className={`${css.statisticsItem}`}>
        Positive feedback: {positivePercentage}
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
