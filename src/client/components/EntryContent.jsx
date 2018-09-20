import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

// TODO: Add report and helpful button div
// TODO: Get rid of magic number
const EntryContent = ({ review }) => {
  const { date, foodScore, serviceScore, ambienceScore, overallScore } = review;
  const text = review.review;
  const timeAgoInMs = moment(new Date()) - moment(date);
  const sevenDaysAgoInMs = 604800000;
  const dateString =
    timeAgoInMs > sevenDaysAgoInMs
      ? `Dined on ${moment(date).format('MMMM D, YYYY')}`
      : `Dined ${moment(date).fromNow()}`;

  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    const red = i <= overallScore;
    stars.push(<Star key={i} red={red} className="fa fa-star" />);
  }

  return (
    <Container>
      <InnerContainer>
        {stars}
        <Dined>{dateString}</Dined>
      </InnerContainer>
      <InnerContainer>
        <Category className="overall">Overall</Category>
        <Rating className="overall">{overallScore}</Rating>
        <Category>Food</Category>
        <Rating>{foodScore}</Rating>
        <Category>Service</Category>
        <Rating>{serviceScore}</Rating>
        <Category>Ambience</Category>
        <Rating hideBullet>{ambienceScore}</Rating>
      </InnerContainer>
      <Text>{text}</Text>
    </Container>
  );
};

EntryContent.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default EntryContent;

const Container = styled.div`
  font-family: BrandonText;
  margin-left: 1rem;
`;

const InnerContainer = styled.div`
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
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: #2d333f;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
