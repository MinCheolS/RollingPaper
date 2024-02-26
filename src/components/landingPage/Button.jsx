import styled from 'styled-components';

const Button = styled.button`
  width: 280px;
  padding: 14px 24px;
  text-align: center;
  border-radius: 12px;
  background: var(--purple600, #9935ff);
  color: var(--white, #fff);
  font-size: var(--font18, 1.8rem);
  font-weight: var(--regular, 700);
  line-height: 28px;
  letter-spacing: -0.18px;
  &:hover {
    background: var(--purple700, #861dee);
  }
  &:active {
    background: var(--purple800, #6e0ad1);
  }
`;

export default Button;
