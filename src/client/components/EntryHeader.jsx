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

const EntryHeader = (props) => {
  const { review } = props;
  const { date, foodScore, serviceScore, ambianceScore, overallScore } = review;
  const formattedDate = moment(date).format('MMMM D, YYYY');

  const createStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i += 1) {
      const red = i <= overallScore;
      stars.push(<Star red={red} className="fa fa-star" />);
    }
    return stars;
  };

  return (
    <div>
      <Div>
        {createStars()}
        <Dined>Dined on {formattedDate}</Dined>
      </Div>
      <Div>
        <Category>Overall</Category>
        <Rating>{overallScore}</Rating>
        <Category>Food</Category>
        <Rating>{foodScore}</Rating>
        <Category>Service</Category>
        <Rating>{serviceScore}</Rating>
        <Category>Ambience</Category>
        <Rating hideBullet>{ambianceScore}</Rating>
      </Div>
    </div>
  );
};

EntryHeader.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default EntryHeader;
