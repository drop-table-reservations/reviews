import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EntryUser = ({ review }) => {
  const { username, userReviews, userLocation } = review;
  const nameArr = username.split(' ');
  const displayName = nameArr[0] + nameArr[1][0];
  const initials = nameArr[0][0] + nameArr[1][0];
  const colorIndex = username.charCodeAt(0) % 4;

  const reviewString =
    userReviews > 1 ? `${userReviews} reviews` : `${userReviews} review`;

  return (
    <Container>
      <Avatar colorInd={colorIndex}>{initials}</Avatar>
      <UserNameLoc style={{ color: '#2d333f' }}>{displayName}</UserNameLoc>
      <UserNameLoc style={{ color: '#6f737b' }}>{userLocation}</UserNameLoc>
      <UserReviews>
        <i className="fa fa-comment-o fa-flip-horizontal" />
        <span> {reviewString}</span>
      </UserReviews>
    </Container>
  );
};

EntryUser.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default EntryUser;

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

const UserNameLoc = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const UserReviews = styled.div`
  margin-top: 0.25rem;
  font-size: 12px;
  font-weight: bold;
  color: #6f737b;
`;
