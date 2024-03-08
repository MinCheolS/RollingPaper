import styled from 'styled-components';

const ToggleTheme = styled.button`
  position: absolute;
  top: 8px;
  right: calc(50% - 600px);
  width: 50px;
  height: 50px;
  background: ${({ theme }) =>
    theme.mode === 'light' ? '#ebebeb' : '#242424'};
  border-radius: 200px;
  box-shadow:
    inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  &::after {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    left: 10px;
    background: ${({ theme }) =>
      theme.mode === 'light'
        ? 'linear-gradient(180deg, #ffcc89, #d8860b)'
        : 'linear-gradient(180deg, #777, #3a3a3a)'};
    border-radius: 50%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  @media all and (max-width: 1248px) {
    right: 24px;
  }
`;

export default ToggleTheme;
