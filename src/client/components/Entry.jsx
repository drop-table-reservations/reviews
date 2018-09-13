import React from 'react';
import PropTypes from 'prop-types';
import EntryUser from './EntryUser';
import EntryHeader from './EntryContent';
import EntryText from './EntryText';

const Entry = (props) => {
  const { review } = props;
  return (
    <div className="entry">
      <EntryUser review={review} />
      <EntryHeader review={review} />
    </div>
  );
};

Entry.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default Entry;
