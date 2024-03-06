import styled from 'styled-components';
import arrowTop from '../../assets/icons/arrowTop.svg';
import arrowDown from '../../assets/icons/arrowDown.svg';

export const SelectBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.2rem solid
    ${({ $isOpen }) =>
      $isOpen ? `var(--purple600, #9935ff)` : `var(--gray300)`};

  &:hover {
    border: 0.2rem solid var(--purple600, #9935ff);
  }
  &:focus {
    border: 0.2rem solid var(--purple600, #9935ff);
  }
`;

export const SelectSpan = styled.span`
  color: ${({ theme }) => theme.text};
  font-family: ${({ $fontValue }) => `${$fontValue}`};
  font-size: var(--font16);
  font-weight: var(--regular);
  line-height: 1.625;
  letter-spacing: -0.016rem;
`;

export const ArrowBtn = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: var(--font24);
  &::before {
    content: ${({ $isOpen }) =>
      $isOpen ? `url(${arrowTop})` : `url(${arrowDown})`};
  }
`;

export const SelectOptionDiv = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10.9rem;
  padding: 1rem 0.1rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray300);
  background-color: ${({ theme }) => theme.buttonSelectColor};
  box-shadow: 0 4px 12px #00000052;
  z-index: 1;
`;

export const SelectOptionBtn = styled.button`
  width: 31.6rem;
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-family: ${({ $item }) => `${$item}`};
  font-size: var(--font16);
  font-weight: var(--regular);
  line-height: 1.625;
  letter-spacing: -0.016rem;

  &:hover {
    background-color: ${({ theme }) => theme.btnBgColor};
  }
`;
