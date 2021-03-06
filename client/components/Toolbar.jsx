import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FilterCheckbox from './FilterCheckbox';
import SortDropDown from './SortDropDown';

const Toolbar = (props) => {
  const {
    filteredReviews,
    filterCategories,
    filterStars,
    activeFilters,
    sortReviews,
  } = props;
  const { categories, sort, stars } = activeFilters;

  const reviewCategories = new Set();
  filteredReviews.forEach((review) => {
    reviewCategories.add(review.recommendedFor[0]);
  });

  const categoriesToDisplay = Array.from(reviewCategories);
  const starFilter = stars ? (
    <FilterCheckbox
      key={stars}
      label={stars}
      filterCategories={filterStars}
      checked
    />
  ) : null;

  return (
    <Container>
      <Header>Sort by</Header>
      <SortDropDown sort={sort} sortReviews={sortReviews} />
      <Header>Filters</Header>
      <FilterPanel>
        {starFilter}
        {categoriesToDisplay.map((category) => (
          <FilterCheckbox
            key={category}
            label={category}
            filterCategories={filterCategories}
            checked={categories.has(category)}
          />
        ))}
      </FilterPanel>
    </Container>
  );
};

Toolbar.propTypes = {
  filteredReviews: PropTypes.instanceOf(Array).isRequired,
  filterCategories: PropTypes.func.isRequired,
  filterStars: PropTypes.func.isRequired,
  sortReviews: PropTypes.func.isRequired,
  activeFilters: PropTypes.instanceOf(Object).isRequired,
};

export default Toolbar;

const Container = styled.div`
  padding-top: 1rem;
  border-top: 1px solid #e1e1e1;
  font-family: BrandonText;
`;

const Header = styled.h3`
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.8rem;
  margin-top: 0.875rem;
`;

const FilterPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;
