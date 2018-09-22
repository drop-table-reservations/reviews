import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Summary = ({ reviews }) => {
  const numReviews = reviews.length;
  // TODO: convert to reduce
  const fiveStarCount = reviews.filter((review) => review.overallScore === 5)
    .length;
  const fourStarCount = reviews.filter((review) => review.overallScore === 4)
    .length;
  const threeStarCount = reviews.filter((review) => review.overallScore === 3)
    .length;
  const twoStarCount = reviews.filter((review) => review.overallScore === 2)
    .length;
  const oneStarCount = reviews.filter((review) => review.overallScore === 1)
    .length;

  const dists = [
    0,
    Math.floor((oneStarCount * 100) / numReviews),
    Math.floor((twoStarCount * 100) / numReviews),
    Math.floor((threeStarCount * 100) / numReviews),
    Math.floor((fourStarCount * 100) / numReviews),
    Math.floor((fiveStarCount * 100) / numReviews),
  ];

  const stars = [];
  for (let i = 5; i >= 1; i -= 1) {
    stars.push(
      <div>
        <span>{i}</span>
        <StarBar redWidth={dists[i]} />
      </div>,
    );
  }

  return (
    <Container>
      <Header>What {reviews.length} People Are Saying</Header>
      <InnerContainer>
        <RevSummary />
        <StarDist>{stars}</StarDist>
      </InnerContainer>
    </Container>
  );
};

Summary.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
};

export default Summary;

const Container = styled.div`
  background: #ffffff;
`;

const InnerContainer = styled.div`
  display: flex;
`;

const RevSummary = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 256px;
  max-width: 352px;
`;

const StarDist = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 256px;
  min-width: 256px;
`;

const StarBar = styled.div`
  background: ${(props) =>
    `linear-gradient(90deg, #da3743 ${props.redWidth}%, #ffffff 0%)`};
  line-height: 2rem;
  height: 1rem;
  border: 1px solid #e1e1e1;
  :hover {
    border: 2px solid #da3743;
    padding: calc(0.5rem - 1px);
    cursor: pointer;
  }
`;

const Header = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: '#2d333f';
  padding-bottom: 1rem;
`;
