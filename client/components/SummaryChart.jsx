import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SummaryChart = (props) => {
  const { summarized, filterStars } = props;
  const { numReviews, numFiveStars, numFourStars, numThreeStars, numTwoStars, numOneStars } = summarized;

  const dists = [
    0,
    Math.floor((numOneStars * 100) / numReviews),
    Math.floor((numTwoStars * 100) / numReviews),
    Math.floor((numThreeStars * 100) / numReviews),
    Math.floor((numFourStars * 100) / numReviews),
    Math.floor((numFiveStars * 100) / numReviews),
  ];

  const filterStarsTo = (event) => {
    const stars = Number(event.target.dataset.stars);
    filterStars(stars);
  };

  const stars = [];
  for (let i = 5; i >= 1; i -= 1) {
    stars.push(
      <InnerContainer>
        <StarNum>{i}</StarNum>
        <StarBar redWidth={dists[i]} data-stars={i} onClick={filterStarsTo} />
      </InnerContainer>,
    );
  }

  return <Container>{stars}</Container>;
};

SummaryChart.propTypes = {
  summarized: PropTypes.instanceOf(Object).isRequired,
  filterStars: PropTypes.func.isRequired,
};

export default SummaryChart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 256px;
  min-width: 256px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const StarNum = styled.p`
  width: 16px;
  text-align: center;
  ${InnerContainer}:hover & {
    text-decoration: underline;
  }
`;

const StarBar = styled.div`
  background: ${(props) =>
    `linear-gradient(90deg, #da3743 ${props.redWidth}%, #ffffff 0%)`};
  line-height: 2rem;
  height: 1rem;
  width: 224px;
  border: 1px solid #e1e1e1;
  /* margin-top: -1px;
  margin-bottom: -1px;
  overflow: hidden; */
  padding: 0.1rem;
  ${InnerContainer}:hover & {
    border: 2px solid #da3743;
    padding: calc(0.1rem - 1px);
    cursor: pointer;
  }
`;