import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SummaryStats = (props) => {
  const { summarized } = props;
  const {
    percWouldRec,
    averageOverall,
    averageFood,
    averageService,
    averageAmbience,
    averageValue,
  } = summarized;

  const starIcons = [];
  for (let i = 1; i <= 5; i += 1) {
    const red = i <= Math.round(averageOverall);
    starIcons.push(<Star key={i} red={red} className="fa fa-star" />);
  }

  return (
    <RevSummary>
      <p style={{ lineHeight: '1.5', fontWeight: '500' }}>
        Overall ratings and reviews
      </p>
      <p style={{ paddingTop: '0.75rem' }}>
        Reviews can only be made by diners who have eaten at this restaurant
      </p>
      <StarWrapper>
        {starIcons}
        <span>{averageOverall} based on recent ratings</span>
      </StarWrapper>
      <ScoreWrapper>
        <Score>
          <ScoreItself>{averageFood}</ScoreItself>
          <ScoreCategory>Food</ScoreCategory>
        </Score>
        <Score>
          <ScoreItself>{averageService}</ScoreItself>
          <ScoreCategory>Service</ScoreCategory>
        </Score>
        <Score>
          <ScoreItself>{averageAmbience}</ScoreItself>
          <ScoreCategory>Ambience</ScoreCategory>
        </Score>
        <Score noBorder>
          <ScoreItself>{averageValue}</ScoreItself>
          <ScoreCategory>Value</ScoreCategory>
        </Score>
      </ScoreWrapper>
      <Highlight>
        <i className="fa fa-volume-up" />
        <HighlightText>
          <strong>Noise ·</strong> Moderate
        </HighlightText>
      </Highlight>
      <Highlight>
        <i className="fa fa-thumbs-o-up" />
        <HighlightText>
          <strong>{percWouldRec}% of people</strong> would recommend it to a
          friend
        </HighlightText>
      </Highlight>
    </RevSummary>
  );
};

SummaryStats.propTypes = {
  summarized: PropTypes.instanceOf(Object).isRequired,
};

export default SummaryStats;

const StarWrapper = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 1rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.43;
`;

const ScoreWrapper = styled.div`
  display: flex;
  font-weight: 500;
`;

const ScoreItself = styled.p`
  line-height: 1.33;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  ${(props) => (!props.noBorder ? 'border-right: solid 1px #e1e1e1' : '')};
`;

const ScoreCategory = styled.p`
  font-size: 0.875rem;
  font-weight: normal;
`;

const RevSummary = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 256px;
  max-width: 352px;
  margin-bottom: 2rem;
`;

const Star = styled.i`
  color: ${(props) => (props.red ? '#da3743' : '#e1e1e1')};
  font-size: 17px;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
`;

const Highlight = styled.div`
  padding-top: 1rem;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  line-height: 1.43;
`;

const HighlightText = styled.span`
  > strong {
    font-weight: 500;
  }
  margin-left: 0.5rem;
  font-family: BrandonText;
  font-size: 0.875rem;
`;
