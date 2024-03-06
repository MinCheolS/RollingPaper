import React from 'react';
import { PropTypes } from 'prop-types';
import LandingCard from '../components/LandingPage/LandingCard';
import Header from '../components/Common/Header/Header';
import { Container, Wrapper } from '../styles/LandingPage/LandingPage.style';
import { LinkButton } from '../styles/LandingPage/LinkButton.style';

function LandingPage({ theme = 'light' }) {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <LandingCard theme={theme} />
          <LinkButton to="/list">구경해보기</LinkButton>
        </Wrapper>
      </Container>
    </>
  );
}
LandingPage.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LandingPage;
