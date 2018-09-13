import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EntryUser from './EntryUser';
import EntryContent from './EntryContent';

const Container = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d8d9db;
`;

const Entry = (props) => {
  const { review } = props;
  return (
    <Container className="entry">
      <EntryUser review={review} />
      <EntryContent review={review} />
    </Container>
  );
};

Entry.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default Entry;
