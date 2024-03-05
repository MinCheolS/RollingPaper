import React from 'react';
import styled from 'styled-components';
import ListCard from '../components/listPage/ListCard';
import LinkButton from '../components/landingPage/Button';
import Header from '../components/Common/header/Header';

function ListPage() {
  return (
    <>
      <Header />
      <Container>
        <ListCard />
        <LinkButton to="/post">나도 만들어보기</LinkButton>
      </Container>
    </>
  );
}

export default ListPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  padding: 0 24px;
  @media all and (max-width: 1248px) {
    overflow: hidden;
  }
`;
