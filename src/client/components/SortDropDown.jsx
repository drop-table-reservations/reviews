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
        <div onClick={expandIt} style={{ position: 'relative' }}>
          <SelectedOption>
            <p>{sort}</p>
            <i className="fa fa-chevron-up"></i>
          </SelectedOption>
          <Menu>
            <SortCheckbox
              label="newest"
              sortReviews={sortReviews}
              checked={sort === 'newest'}
            />
            <SortCheckbox
              label="highest"
              sortReviews={sortReviews}
              checked={sort === 'highest'}
            />
            <SortCheckbox
              label="lowest"
              sortReviews={sortReviews}
              checked={sort === 'lowest'}
            />
          </Menu>
        </div>
      );
    }
    return (
      <div onClick={expandIt}>
          <SelectedOption>
            <p>{sort}</p>
            <i className="fa fa-chevron-down"></i>
          </SelectedOption>
      </div>
    );
  }
}

SortDropDown.propTypes = {
  sort: PropTypes.string.isRequired,
  sortReviews: PropTypes.func.isRequired,
};

export default SortDropDown;

const SelectedOption = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18rem;
  border: 1px solid #e1e1e1;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
`;

const Menu = styled.div`
  position: absolute;
  width: 18rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border: 1px solid #e1e1e1;
  font-weight: 500;
  font-size: 0.9rem;
  background-color: white;
  :focus {
    outline: none !important;
  }
`;
