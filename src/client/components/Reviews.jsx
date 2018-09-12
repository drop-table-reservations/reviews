import React from 'react';
import Summary from './Summary';
import Filters from './Filters';
import List from './List';
import Pages from './Pages';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsToDisplay: [{ _id: 12345, rating: 5 }],
    };
  }

  render() {
    const { reviewsToDisplay } = this.state;
    return (
      <div id="reviews">
        <Summary />
        <Filters />
        <List reviewsToDisplay={reviewsToDisplay} />
        <Pages />
      </div>
    );
  }
}

export default Reviews;
