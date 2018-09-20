import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Summary = (props) => {
  const { reviews } = props;
  return <Header>What {reviews.length} People Are Saying</Header>;
};

Summary.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
};

export default Summary;

const Header = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: '#2d333f';
  padding-bottom: 1rem;
`;
