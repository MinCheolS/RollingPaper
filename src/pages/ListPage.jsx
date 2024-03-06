import React from 'react';
import ListCard from '../components/ListPage/ListCard';
import Header from '../components/Common/Header/Header';
import { Container, Wrapper } from '../styles/ListPage/ListPage.style';
import { LinkButton } from '../styles/LandingPage/LinkButton.style';

function ListPage() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <ListCard />
          <LinkButton to="/post">나도 만들어보기</LinkButton>
        </Wrapper>
      </Container>
    </>
  );
}

export default ListPage;
