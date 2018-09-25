import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SummaryStats from './SummaryStats';
import SummaryChart from './SummaryChart';

const Summary = (props) => {
  const { reviews, filterStars } = props;
  const summarized = summarizeReviews(reviews);

  return (
    <Container>
      <Header>What {reviews.length} People Are Saying</Header>
      <InnerContainer>
        <SummaryStats summarized={summarized} />
        <SummaryChart summarized={summarized} filterStars={filterStars} />
      </InnerContainer>
    </Container>
  );
};

Summary.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
  filterStars: PropTypes.func.isRequired,
};

export default Summary;

const Container = styled.div`
  background: #ffffff;
`;

const InnerContainer = styled.div`
  display: flex;
  border-top: solid 1px #e1e1e1;
  padding-top: 1rem;
  justify-content: space-around;
`;

const Header = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: '#2d333f';
  padding-bottom: 1rem;
`;

const summarizeReviews = (reviews) => {
  const summary = {
    numReviews: 0,
    totalFoodScore: 0,
    totalServiceScore: 0,
    totalAmbienceScore: 0,
    totalValueScore: 0,
    totalNoiseScore: 0,
    totalOverallScore: 0,
    numWouldRecommend: 0,
    numFiveStars: 0,
    numFourStars: 0,
    numThreeStars: 0,
    numTwoStars: 0,
    numOneStars: 0,
  };

  const summarized = reviews.reduce((overallSummary, review) => {
    const wouldRec = review.wouldRecommend ? 1 : 0;
    const five = review.overallScore === 5 ? 1 : 0;
    const four = review.overallScore === 4 ? 1 : 0;
    const three = review.overallScore === 3 ? 1 : 0;
    const two = review.overallScore === 2 ? 1 : 0;
    const one = review.overallScore === 1 ? 1 : 0;
    return {
      numReviews: overallSummary.numReviews + 1,
      totalFoodScore: overallSummary.totalFoodScore + review.foodScore,
      totalServiceScore: overallSummary.totalServiceScore + review.serviceScore,
      totalAmbienceScore:
        overallSummary.totalAmbienceScore + review.ambienceScore,
      totalValueScore: overallSummary.totalValueScore + review.valueScore,
      totalNoiseScore: overallSummary.totalNoiseScore + review.noiseLevel,
      totalOverallScore: overallSummary.totalOverallScore + review.overallScore,
      numWouldRecommend: overallSummary.numWouldRecommend + wouldRec, // BOOL
      numFiveStars: overallSummary.numFiveStars + five,
      numFourStars: overallSummary.numFourStars + four,
      numThreeStars: overallSummary.numThreeStars + three,
      numTwoStars: overallSummary.numTwoStars + two,
      numOneStars: overallSummary.numOneStars + one,
    };
  }, summary);

  summarized.averageOverall = Number(
    summarized.totalOverallScore / summarized.numReviews,
  ).toFixed(1);
  summarized.averageFood = Number(
    summarized.totalFoodScore / summarized.numReviews,
  ).toFixed(1);
  summarized.averageService = Number(
    summarized.totalServiceScore / summarized.numReviews,
  ).toFixed(1);
  summarized.averageAmbience = Number(
    summarized.totalAmbienceScore / summarized.numReviews,
  ).toFixed(1);
  summarized.averageValue = Number(
    summarized.totalValueScore / summarized.numReviews,
  ).toFixed(1);
  summarized.percWouldRec = Number(
    (summarized.numWouldRecommend / summarized.numReviews) * 100,
  ).toFixed();
  summarized.averageNoise = Number(
    summarized.totalNoiseScore / summarized.numReviews,
  ).toFixed();
  return summarized;
};
