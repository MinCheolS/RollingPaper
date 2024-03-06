import styled from 'styled-components';

export const WriteContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > span {
    color: ${({ theme }) => theme.text};
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }

  & > div {
    height: 26rem;

    @media (max-width: 360px) {
      width: 32rem;
    }
  }
`;

export const etc = styled.div``;
