import React from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';

const List = (props) => {
  const { reviewsToDisplay } = props;
  return (
    <div id="list">
      {reviewsToDisplay.map((review) => (
        <Entry review={review} />
      ))}
    </div>
  );
};

List.propTypes = {
  reviewsToDisplay: PropTypes.instanceOf(Array).isRequired,
};

export default List;
