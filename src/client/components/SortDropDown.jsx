import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SortCheckbox from './SortCheckbox';

class SortDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    const { sort, sortReviews } = this.props;
    const { expanded } = this.state;
    const expandIt = () => {
      this.setState({
        expanded: !expanded,
      });
    };
    if (expanded) {
      return (
        <Container onClick={expandIt}>
          <SelectedOption>
            <p>{sort}</p>
            <i className="fa fa-chevron-up" />
          </SelectedOption>
          <Menu>
            <SortCheckbox
              label="Newest"
              sortReviews={sortReviews}
              checked={sort === 'Newest'}
            />
            <SortCheckbox
              label="Highest rating"
              sortReviews={sortReviews}
              checked={sort === 'Highest rating'}
            />
            <SortCheckbox
              label="Lowest rating"
              sortReviews={sortReviews}
              checked={sort === 'Lowest rating'}
            />
          </Menu>
        </Container>
      );
    }
    return (
      <Container onClick={expandIt}>
        <SelectedOption>
          <p>{sort}</p>
          <i className="fa fa-chevron-down" />
        </SelectedOption>
      </Container>
    );
  }
}

SortDropDown.propTypes = {
  sort: PropTypes.string.isRequired,
  sortReviews: PropTypes.func.isRequired,
};

export default SortDropDown;

const Container = styled.div`
  width: 18rem;
  position: relative;
  font-weight: 500;
  font-size: 0.9rem;
`;

const SelectedOption = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.25rem;
  width: inherit;
  border: 1px solid #d8d9db;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  :hover {
    border: 2px solid #da3743;
    padding: calc(0.5rem - 1px);
    cursor: pointer;
  }
`;

const Menu = styled.div`
  position: absolute;
  width: inherit;
  border: 1px solid #d8d9db;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  background-color: white;
  :focus {
    outline: none !important;
  }
`;
