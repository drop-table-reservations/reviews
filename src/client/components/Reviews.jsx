import React from 'react';
import _ from 'lodash';

import Summary from './Summary';
import Toolbar from './Toolbar';
import List from './List';
import Pages from './Pages';
import sampleRestaurant from './__data__/restaurant.data';

class Reviews extends React.Component {
  static applyFilters(reviews, stars, categories) {
    return reviews.filter(
      (review) =>
        (stars === null || stars === review.overallScore) &&
        (categories.size === 0 || categories.has(review.recommendedFor[0])),
    );
  }

  static applyPage(reviews, page) {
    const maxIndex = page * 20;
    return reviews.slice(maxIndex - 20, maxIndex);
  }

  constructor() {
    super();
    this.state = {
      filteredReviews: null,
      reviewsToDisplay: null,
    };
    this.filters = {
      sort: 'newest',
      stars: null,
      categories: new Set(),
      page: 1,
    };
    this.reviews = sampleRestaurant.reviews;
    this.sortReviews = this.sortReviews.bind(this);
    this.filterStars = this.filterStars.bind(this);
    this.filterPage = this.filterPage.bind(this);
    this.filterCategories = this.filterCategories.bind(this);
  }

  componentDidMount() {
    fetch('/restaurants/30590734/reviews')
      .then((response) => response.json())
      .then((data) => {
        this.reviews = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.setReviewsToDisplay();
      })
      .catch((err) => {
        throw err;
      });
  }

  setReviewsToDisplay() {
    const { reviews } = this;
    const { stars, categories, page } = this.filters;
    const filteredReviews = Reviews.applyFilters(reviews, stars, categories);
    const reviewsToDisplay = Reviews.applyPage(filteredReviews, page);
    this.setState({ filteredReviews, reviewsToDisplay });
  }

  sortReviews(sortBy) {
    const { sort, stars } = this.filters;
    if (sort === sortBy || stars !== null) return;
    const reviews = this.reviews.slice(0);
    if (sortBy === 'highest') {
      this.reviews = _.orderBy(reviews, ['overallScore'], ['desc']);
    } else if (sortBy === 'lowest') {
      this.reviews = _.orderBy(reviews, ['overallScore'], ['asc']);
    } else {
      this.reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    this.filters.sort = sortBy;
    this.filters.page = 1;
    this.setReviewsToDisplay();
  }

  filterPage(targetPage) {
    this.filters.page = targetPage;
    this.setReviewsToDisplay();
  }

  filterStars(targetStars) {
    if (targetStars === this.filters.stars) {
      this.filters.stars = null;
    } else {
      this.filters.stars = targetStars;
    }
    this.filters.page = 1;
    this.setReviewsToDisplay();
  }

  filterCategories(targetCategory) {
    const { categories } = this.filters;
    if (categories.has(targetCategory)) {
      categories.delete(targetCategory);
    } else {
      categories.add(targetCategory);
    }
    this.filters.page = 1;
    this.setReviewsToDisplay();
  }

  render() {
    const { filteredReviews, reviewsToDisplay } = this.state;
    if (!reviewsToDisplay) return <p>Loading</p>;
    const pageCount = Math.ceil(filteredReviews.length / 20);
    return (
      <div id="reviews">
        <Summary reviews={this.reviews} filterStars={this.filterStars} />
        <Toolbar
          filteredReviews={filteredReviews}
          sortReviews={this.sortReviews}
          filterCategories={this.filterCategories}
          filterStars={this.filterStars}
          activeFilters={this.filters}
        />
        <List reviewsToDisplay={reviewsToDisplay} />
        <Pages
          pageCount={pageCount}
          filterPage={this.filterPage}
          activePage={this.filters.page}
        />
      </div>
    );
  }
}

export default Reviews;
