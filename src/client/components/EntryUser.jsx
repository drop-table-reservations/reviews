import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-family: BrandonText;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  margin-left: 1rem;
  max-width: 6rem;
  min-width: 6rem;
`;

const avatarColors = ['#bb6acd', '#df4e96', '#6c8ae4', '#d86441'];
const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => avatarColors[props.colorInd]};
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

// TODO: add user location to data
const EntryUser = (props) => {
  const { review } = props;
  const { username, userReviews } = review;
  const userLocation = 'San Francisco';
  const nameArr = username.split(' ');
  const displayName = nameArr[0] + nameArr[1][0];
  const initials = nameArr[0][0] + nameArr[1][0];
  const colorIndex = username.charCodeAt(0) % 4;

  const reviewString =
    userReviews > 1 ? `${userReviews} reviews` : `${userReviews} review`;

  const nameStyles = {
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
    color: '#2d333f',
  };

  const locStyles = {
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
    color: '#6f737b',
  };

  const revStyles = {
    marginTop: '0.25rem',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#6f737b',
    // TODO: add spacing between children?
  };

  return (
    <Container className="entry-user">
      <Avatar colorInd={colorIndex}>{initials}</Avatar>
      <p style={nameStyles}>{displayName}</p>
      <p style={locStyles}>{userLocation}</p>
      <div style={revStyles}>
        <i className="fa fa-comment-o fa-flip-horizontal" />
        <span> {reviewString}</span>
      </div>
    </Container>
  );
};

EntryUser.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default EntryUser;
