import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Checkbox = (props) => {
  const { label, checked, filterBy } = props;
  const filterByCategory = (event) => {
    filterBy(event.currentTarget.dataset.value);
  };
  const iconToUse = checked ? 'fa fa-check-square-o' : 'fa fa-square-o';
  return (
    <Styled checked={checked} data-value={label} onClick={filterByCategory}>
      <Icon checked={checked} className={iconToUse} />
      <p>{label}</p>
    </Styled>
  );
};

Checkbox.propTypes = {
  filterBy: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
const Icon = styled.i`
  color: ${(props) => (props.checked ? '#da3743' : 'black')};
  font-size: 1.25rem;
  margin-right: 0.75rem;
`;

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.875rem;
  margin-right: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.125rem;
  border: ${(props) => (props.checked ? '2px solid' : '1px solid')};
  border-color: ${(props) => (props.checked ? '#da3743' : '#e1e1e1')};
  font-family: BrandonText;
  font-weight: 500;
  font-size: 0.9rem;
  color: black;
`;
