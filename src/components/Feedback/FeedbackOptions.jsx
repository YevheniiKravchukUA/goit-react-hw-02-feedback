import PropTypes from 'prop-types';
import css from 'components/Feedback/Feedback.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={`${css.buttonsList}`}>
      {options.map(el => {
        const optionName = el.slice(0, 1).toUpperCase() + el.slice(1);

        return (
          <li key={optionName} className={`${css.buttonsListItem}`}>
            <button
              className={`${css.optionsButton}`}
              name={optionName}
              onClick={() => {
                onLeaveFeedback(el);
              }}
            >
              {optionName}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
