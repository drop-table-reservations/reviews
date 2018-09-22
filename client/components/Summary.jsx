import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const summarizeReviews = (reviews) => {
  let summary = {
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

  let summarized = reviews.reduce((overallSummary, review) => {
    let wouldRec = review.wouldRecommend ? 1 : 0;
    let five = review.overallScore === 5 ? 1 : 0;
    let four = review.overallScore === 4 ? 1 : 0;
    let three = review.overallScore === 3 ? 1 : 0;
    let two = review.overallScore === 2 ? 1 : 0;
    let one = review.overallScore === 1 ? 1 : 0;
    return {
      numReviews: overallSummary.numReviews + 1,
      totalFoodScore: overallSummary.totalFoodScore + review.foodScore,
      totalServiceScore: overallSummary.totalServiceScore + review.serviceScore,
      totalAmbienceScore: overallSummary.totalAmbienceScore + review.ambienceScore,
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

  summarized.averageOverall = Number(summarized.totalOverallScore / summarized.numReviews).toFixed(1);
  summarized.averageFood = Number(summarized.totalFoodScore / summarized.numReviews).toFixed(1);
  summarized.averageService = Number(summarized.totalServiceScore / summarized.numReviews).toFixed(1);
  summarized.averageAmbience = Number(summarized.totalAmbienceScore / summarized.numReviews).toFixed(1);
  summarized.averageValue = Number(summarized.totalValueScore / summarized.numReviews).toFixed(1);
  summarized.percWouldRec = Number((summarized.numWouldRecommend / summarized.numReviews) * 100).toFixed();
  summarized.averageNoise = Number(summarized.totalNoiseScore / summarized.numReviews).toFixed();
  return summarized;
};

const Summary = (props) => {
  const { reviews, filterStars } = props;

  const summarized = summarizeReviews(reviews);
  const { numReviews, numFiveStars, numFourStars, numThreeStars, numTwoStars, numOneStars } = summarized;
  const { percWouldRec, averageOverall, averageFood, averageService, averageAmbience, averageValue, averageNoise } = summarized;

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
      <div>
        <span>{i}</span>
        <StarBar redWidth={dists[i]} data-stars={i} onClick={filterStarsTo} />
      </div>,
    );
  }

  const starIcons = [];
  for (let i = 1; i <= 5; i += 1) {
    const red = i <= averageOverall;
    starIcons.push(<Star key={i} red={red} className="fa fa-star" />);
  }

  return (
    <Container>
      <Header>What {reviews.length} People Are Saying</Header>
      <InnerContainer>
        <RevSummary>
          <p>Overall ratings and reviews</p>
          <p>Reviews can only be made by diners who have eaten at this restaurant</p>
          {starIcons}
          <p>{averageOverall} based on recent ratings</p>
          <p>{averageFood} food</p>
          <p>{averageService} service</p>
          <p>{averageAmbience} ambience</p>
          <p>{averageValue} value</p>
          <p class="fa fa-volume-up">Noise - moderate</p>
          <p class="fa fa-thumbs-o-up">{percWouldRec}% would recommend</p>
        </RevSummary>
        <StarDist>{stars}</StarDist>
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
`;

const RevSummary = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 256px;
  max-width: 352px;
`;

const Star = styled.i`
  color: ${(props) => (props.red ? '#da3743' : '#e1e1e1')};
  font-size: 17px;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
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
