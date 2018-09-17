import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: BrandonText;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  border-radius: 50%;
  border: solid 1px;
  border-color: ${(props) => (props.active ? 'red' : '#d8d9db')};
  color: #2d333f;
  cursor: pointer;
`;

const Pages = (props) => {
  const { pageCount, activePage, filterPage } = props;
  const changePage = (event) => {
    const page = Number(event.target.dataset.value);
    filterPage(page);
  };
  const pageButtons = [];
  for (let i = 1; i <= pageCount; i += 1) {
    const active = i === activePage;
    pageButtons.push(
      <PageButton key={i} data-value={i} active={active} onClick={changePage}>
        {i}
      </PageButton>,
    );
  }

  return (
    <Container id="page-buttons">
      <PageButton
        data-value={Math.max(activePage - 1, 1)}
        onClick={changePage}
        className="fa fa-arrow-left"
      />
      <InnerContainer>{pageButtons}</InnerContainer>
      <PageButton
        data-value={Math.min(activePage + 1, pageCount)}
        onClick={changePage}
        className="fa fa-arrow-right"
      />
    </Container>
  );
};

Pages.propTypes = {
  activePage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  filterPage: PropTypes.func.isRequired,
};

export default Pages;
