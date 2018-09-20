import React from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';

const List = ({ reviewsToDisplay }) => (
  <div>
    {reviewsToDisplay.map((review) => (
      <Entry key={review._id} review={review} />
    ))}
  </div>
);

List.propTypes = {
  reviewsToDisplay: PropTypes.instanceOf(Array).isRequired,
};

export default List;
