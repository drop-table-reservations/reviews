import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const Div = styled.div`
  font-family: BrandonText;
  font-size: 0.875rem;
  line-height: 1.43;
  color: #2d333f;
  margin-bottom: 0.5rem;
`;

const Dined = styled.span`
  margin-left: 0.25rem;
  font-weight: 500;
`;

const Category = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const Rating = styled.span`
  font-family: BrandonText;
  margin-right: 5px;
  color: #da3743;
  font-weight: bold;
  &:after {
    content: ' ·';
    color: ${(props) => (props.hideBullet ? '#ffffff' : '#2d333f')};
  }
`;

const Star = styled.i`
  color: ${(props) => (props.red ? '#da3743' : '#e1e1e1')};
  font-size: 17px;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
`;

const Text = styled.p`
  font-family: BrandonText;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: #2d333f;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

// TODO: Add report and helpful button div
const EntryContent = (props) => {
  const { review } = props;
  const { date, foodScore, serviceScore, ambianceScore, overallScore } = review;
  const text = review.review;
  const timeAgoInMs = moment(new Date()) - moment(date);
  const dateString =
    timeAgoInMs > 604800000
      ? `Dined on ${moment(date).format('MMMM D, YYYY')}`
      : `Dined ${moment(date).fromNow()}`;

  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    const red = i <= overallScore;
    stars.push(<Star key={i} red={red} className="fa fa-star" />);
  }

  return (
    <div style={{ marginLeft: '1rem' }} className="entry-content">
      <Div>
        {stars}
        <Dined>{dateString}</Dined>
      </Div>
      <Div>
        <Category className="overall">Overall</Category>
        <Rating className="overall">{overallScore}</Rating>
        <Category>Food</Category>
        <Rating>{foodScore}</Rating>
        <Category>Service</Category>
        <Rating>{serviceScore}</Rating>
        <Category>Ambience</Category>
        <Rating hideBullet>{ambianceScore}</Rating>
      </Div>
      <div>
        <Text>{text}</Text>
      </div>
    </div>
  );
};

EntryContent.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default EntryContent;
