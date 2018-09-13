import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
  font-family: BrandonText;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: #2d333f;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const EntryText = (props) => {
  const { review } = props;
  const text = review.review;
  return (
    <div>
      <Text>{text}</Text>
    </div>
  );
};

EntryText.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default EntryText;
