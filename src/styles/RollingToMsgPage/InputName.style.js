import styled from 'styled-components';

export const InputNameContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > label {
    color: ${({ theme }) => theme.text};
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }

  & > span {
    color: var(--error);
    margin-top: -0.6rem;
    font-size: var(--font14);
    font-weight: var(--regular);
    line-height: normal;
  }
`;

export const NameInput = styled.input`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid
    ${({ $errorMsg }) => ($errorMsg === '' ? 'var(--gray300)' : 'var(--error)')};
  background-color: ${({ theme }) => theme.inputBgColor};
  color: var(--gray500, #555555);
  font-size: var(--font16);
  font-weight: var(--regular);
  line-height: 1.625;
  letter-spacing: -0.016rem;

  &:hover {
    border: 1px solid var(--purple600, #9935ff);
  }
  &:focus {
    border: 1px solid var(--purple600, #9935ff);
  }

  @media (max-width: 360px) {
    width: 32rem;
  }
`;
