import React from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';
import Filters from './Filters';
import List from './List';
import Pages from './Pages';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    const { reviews } = props;
    this.state = {
      reviewsToDisplay: reviews,
    };
  }

  // width: 640px
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

Reviews.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
};

export default Reviews;
