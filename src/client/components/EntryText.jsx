import React from 'react';
import PropTypes from 'prop-types';

const EntryText = (props) => {
  const { review } = props;
  const text = review.review;
  return (
    <div className="entry-text">
      <p>{text}</p>
    </div>
  );
};

EntryText.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default EntryText;
