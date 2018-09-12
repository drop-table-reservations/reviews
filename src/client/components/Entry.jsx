import React from 'react';
import EntryUser from './EntryUser';
import EntryHeader from './EntryHeader';
import EntryText from './EntryText';

const Entry = () => (
  <div className="review">
    <EntryUser />
    <EntryHeader />
    <EntryText />
  </div>
);

export default Entry;
