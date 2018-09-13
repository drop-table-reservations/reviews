import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-family: BrandonText;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const avatarColors = ['#bb6acd', '#df4e96', '#6c8ae4', '#d86441'];
const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${avatarColors[0]};
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

// TODO: add user location to data
const EntryUser = (props) => {
  const { review } = props;
  const { username, userReviews } = review;
  const userLocation = 'San Francisco';
  const nameArr = username.split(' ');
  const displayName = nameArr[0] + nameArr[1][0];
  const initials = nameArr[0][0] + nameArr[1][0];

  const reviewString =
    userReviews > 1 ? `${userReviews} reviews` : `${userReviews} review`;

  return (
    <Container className="entry-user">
      <Avatar>{initials}</Avatar>
      <p>{displayName}</p>
      <p>{userLocation}</p>
      <i className="fa fa-comment-o fa-flip-horizontal" />
      <span>{reviewString}</span>
    </Container>
  );
};

EntryUser.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default EntryUser;
