import React from 'react';
import Entry from './Entry';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReviews: [{ _id: 12345, rating: 5 }],
    };
  }

  render() {
    const { currentReviews } = this.state;
    return (
      <div id="list">
        { currentReviews.map(review => <Entry rating={review.rating} />) }
      </div>
    );
  }
}

export default List;
