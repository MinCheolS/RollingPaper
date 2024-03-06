import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.borderBottom};
  background-color: ${({ theme }) => theme.bgColor};

  @media all and (max-width: 1248px) {
    padding: 0 24px;
  }
  .HeaderContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    height: 64px;
    margin: auto;
    padding: 11px 0;
  }
`;

export const HeaderLogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & > h1 {
    color: ${({ theme }) => theme.text};
    font-family: Poppins;
    font-size: 19.971px;
    font-weight: 700;
    line-height: normal;
  }
`;

export const HeaderButton = styled(Link)`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid var(--gray300, #ccc);
  background: var(--white, #fff);
  color: var(--gray900, #181818);
  text-align: center;
  font-size: var(--font16, 1.6rem);
  font-weight: var(--regular, 700);
  line-height: 26px;
  letter-spacing: -0.16px;
  &:hover {
    background: var(--gray100, #f6f6f6);
  }
  &:active {
    border: 1px solid var(--gray500, #555);
    background: var(--white, #fff);
  }
`;

export const UserH1 = styled.h1`
  width: max-width;
  color: var(--gray800);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.28px;
  cursor: pointer;
`;
