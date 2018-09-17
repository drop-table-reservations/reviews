import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FilterCheckbox from './FilterCheckbox';

const Toolbar = (props) => {
  const { filteredReviews, filterCategories, activeFilters } = props;
  const { categories } = activeFilters;

  const reviewCategories = new Set();
  filteredReviews.forEach((review) => {
    reviewCategories.add(review.recommendedFor[0]);
  });

  const categoriesToDisplay = Array.from(reviewCategories);

  return (
    <Container>
      <Header>Sort by</Header>
      <Header>Filters</Header>
      <FilterPanel>
        {categoriesToDisplay.map((category) => (
          <FilterCheckbox
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
  activeFilters: PropTypes.instanceOf(Object).isRequired,
};

export default Toolbar;

const Container = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #e1e1e1;
  font-family: BrandonText;
`;

const Header = styled.h3`
  font-weight: 500;
  line-height: 1;
`;

const FilterPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;
