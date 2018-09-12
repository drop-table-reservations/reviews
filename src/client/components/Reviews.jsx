import React from 'react';
import Summary from './Summary';
import Filters from './Filters';
import List from './List';
import Pages from './Pages';

const Reviews = () => (
  <div id="reviews">
    <Summary />
    <Filters />
    <List />
    <Pages />
  </div>
);

export default Reviews;
