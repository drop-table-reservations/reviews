import React from 'react';
import Review from './Review';

class ReviewList extends React.component {
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
        { this.state.currentReviews.map(review => <Review rating={review.rating} />) }
      </div>
    );
  }
}

export default ReviewList;
