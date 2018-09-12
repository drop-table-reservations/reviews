import React from 'react';
import Entry from './Entry';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [{ _id: 12345, rating: 5 }, { _id: 23456, rating: 5 }],
      currentReviews: [{ _id: 12345, rating: 5 }],
    };
  }

  render() {
    return (
      <div>
        { this.state.currentReviews.map(review => <Entry rating={review.rating} />) }
      </div>
    );
  }
}

export default List;
