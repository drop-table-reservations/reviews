import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterCheckbox = (props) => {
  const { label, checked, filterCategories } = props;
  const filterByCategory = (event) => {
    // TODO: clean this up!
    const value =
      Number(event.currentTarget.dataset.value) ||
      event.currentTarget.dataset.value;
    filterCategories(value);
  };
  const iconToUse = checked ? 'fa fa-check-square-o' : 'fa fa-square-o';
  return (
    <Container checked={checked} data-value={label} onClick={filterByCategory}>
      <Icon checked={checked} className={iconToUse} />
      <p>{label}</p>
    </Container>
  );
};

FilterCheckbox.propTypes = {
  filterCategories: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default FilterCheckbox;

const Icon = styled.i`
  color: ${(props) => (props.checked ? '#da3743' : 'black')};
  font-size: 1.25rem;
  margin-right: 0.75rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.875rem;
  margin-right: 1rem;
  padding: ${(props) => (props.checked ? 'calc(0.5rem - 1px)' : '0.5rem')};
  border: ${(props) => (props.checked ? '2px solid' : '1px solid')};
  border-color: ${(props) => (props.checked ? '#da3743' : '#e1e1e1')};
  border-radius: 0.125rem;
  font-family: BrandonText;
  font-weight: 500;
  font-size: 0.9rem;
  color: black;
  :hover {
    border: 2px solid #da3743;
    ${(props) => (!props.checked ? 'padding: calc(0.5rem - 1px)' : '')};
    cursor: pointer;
  }
`;
