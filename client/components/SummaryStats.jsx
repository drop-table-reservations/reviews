import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SummaryStats = (props) => {
  const { summarized } = props;
  const { percWouldRec, averageOverall, averageFood, averageService, averageAmbience, averageValue } = summarized;

  const starIcons = [];
  for (let i = 1; i <= 5; i += 1) {
    const red = i <= averageOverall;
    starIcons.push(<Star key={i} red={red} className="fa fa-star" />);
  }

  return (
    <RevSummary>
      <p style={{lineHeight: '1.5', fontWeight: '500'}}>Overall ratings and reviews</p>
      <p style={{paddingTop: '0.75rem'}}>Reviews can only be made by diners who have eaten at this restaurant</p>
      <StarWrapper>{starIcons}<span>{averageOverall} based on recent ratings</span></StarWrapper>
      <ScoreWrapper>
        <Score>
          <p>{averageFood}</p>
          <p>Food</p>
        </Score>
        <Score>
          <p>{averageService}</p>
          <p>Service</p>
        </Score>
        <Score>
          <p>{averageAmbience}</p>
          <p>Ambience</p>
        </Score>
        <Score noBorder>
          <p>{averageValue}</p>
          <p>Value</p>
        </Score>
      </ScoreWrapper>
      <p style={{marginTop: '0.5rem'}} className="fa fa-volume-up">Noise - moderate</p>
      <p style={{marginTop: '0.5rem'}} className="fa fa-thumbs-o-up">{percWouldRec}% would recommend</p>
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
  padding-bottom: 1rem;
  font-weight: 500;
  font-size: 0.875rem;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  ${(props) => (!props.noBorder ? 'border-right: solid 1px #e1e1e1' : '')};
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
