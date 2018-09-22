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
      <p>Overall ratings and reviews</p>
      <p>Reviews can only be made by diners who have eaten at this restaurant</p>
      <div>{starIcons}<span>{averageOverall} based on recent ratings</span></div>
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
      <p className="fa fa-volume-up">Noise - moderate</p>
      <p className="fa fa-thumbs-o-up">{percWouldRec}% would recommend</p>
    </RevSummary>
  );
};

SummaryStats.propTypes = {
  summarized: PropTypes.instanceOf(Object).isRequired,
};

export default SummaryStats;

const ScoreWrapper = styled.div`
  display: flex;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
  padding-right: 5px;
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
