import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SortCheckbox = (props) => {
  const { label, checked, sortReviews } = props;
  const iconToUse = checked ? 'fa fa-check-circle' : 'fa fa-circle-o';
  const sortBy = (event) => {
    sortReviews(event.currentTarget.dataset.value);
  };
  return (
    <Styled checked={checked} data-value={label} onClick={sortBy}>
      <Icon checked={checked} className={iconToUse} />
      <p>{label}</p>
    </Styled>
  );
};

SortCheckbox.propTypes = {
  sortReviews: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default SortCheckbox;

const Icon = styled.i`
  color: ${(props) => (props.checked ? '#da3743' : 'black')};
  font-size: 1.25rem;
  margin-right: 0.75rem;
`;

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  font-family: BrandonText;
  :hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }
`;
