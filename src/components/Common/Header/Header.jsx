import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  ContainerHeader,
  HeaderButton,
  HeaderLogoLink,
  UserH1,
} from './Header.style';
import LogoIcon from '../../../assets/icons/logo.svg';

function Header({ name }) {
  const location = useLocation();
  const [screenSize, setScreenSize] = useState(1200);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return (
    <ContainerHeader>
      <div className="HeaderContainer">
        {screenSize <= 360 && name ? (
          <UserH1>To. {name}</UserH1>
        ) : (
          <HeaderLogoLink to="/">
            <img className="LogoImage" src={LogoIcon} alt="로고 아이콘" />
            <h1 className="LogoText">Rolling</h1>
          </HeaderLogoLink>
        )}
        {location.pathname !== '/' && location.pathname !== '/list' ? null : (
          <HeaderButton to="/post">롤링 페이퍼 만들기</HeaderButton>
        )}
      </div>
    </ContainerHeader>
  );
}

Header.propTypes = {
  name: PropTypes.string,
};

Header.defaultProps = {
  name: '',
};

export default Header;
