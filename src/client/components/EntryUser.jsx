import React from 'react';
import PropTypes from 'prop-types';

const EntryUser = (props) => {
  const { review } = props;
  const { username, userReviews } = review;
  return (
    <div className="entry-user">
      <div className="avatar">{username}</div>
      <p>{userReviews}</p>
    </div>
  );
};

EntryUser.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default EntryUser;
