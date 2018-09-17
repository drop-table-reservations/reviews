import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FilterCheckbox from './FilterCheckbox';

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

const Toolbar = (props) => {
  const {
    filteredReviews,
    filterCategories,
    sortReviews,
    activeFilters,
  } = props;
  const { stars, categories, sort } = activeFilters;

  const getCategories = () => {
    const categories = {};
    const tuples = [];
    filteredReviews.forEach((review) => {
      const category = review.recommendedFor[0];
      if (categories.hasOwnProperty(category)) {
        categories[category] += 1;
      } else {
        categories[category] = 1;
      }
    });
    const categoryArr = Object.keys(categories);
    categoryArr.forEach((category) => {
      tuples.push([category, categories[category]]);
    });
    return tuples;
  };

  const categoriesToDisplay = getCategories();

  const sortBy = (sortTarget) => {
    sortReviews(sortTarget);
  };

  const filterByCategory = (event) => {
    filterCategories(event.target.value);
  };

  return (
    <Container>
      <Header>Sort by</Header>
      <SortDropDown sort={sort} sortBy={sortBy} />
      <Header>Filters</Header>
      <FilterPanel>
        {categoriesToDisplay.map((category) => (
          <FilterCheckbox
            label={category[0]}
            filterBy={filterCategories}
            checked={categories.has(category[0])}
          />
        ))}
      </FilterPanel>
    </Container>
  );
};

Toolbar.propTypes = {
  filteredReviews: PropTypes.instanceOf(Array).isRequired,
  filterCategories: PropTypes.func.isRequired,
  sortReviews: PropTypes.func.isRequired,
};

export default Toolbar;
