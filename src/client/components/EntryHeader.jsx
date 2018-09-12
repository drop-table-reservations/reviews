import React from 'react';

const EntryHeader = () => {
  const numStars = 5;

  return (
    <div className="entry-head">
      <div className="stars date">
        {Array(numStars).fill(<i className="fa fa-star" />)}
        <span> Dined 5 days ago</span>
      </div>
      <div className="ratings">
        <span>Overall 5 &bull; </span>
        <span>Food 5 &bull; </span>
        <span>Service 5 &bull; </span>
        <span>Ambience 5</span>
      </div>
    </div>
  );
};

export default EntryHeader;
