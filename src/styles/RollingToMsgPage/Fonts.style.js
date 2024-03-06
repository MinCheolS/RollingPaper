import styled from 'styled-components';

export const FontsContentDiv = styled.div`
  max-width: 32rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '25rem' : '1.2rem')};
  gap: 1.2rem;

  @media (max-width: 768px) {
    padding-bottom: ${({ $isOpen }) => ($isOpen ? '25rem' : '0.2rem')};
  }

  @media (max-width: 360px) {
    padding-bottom: ${({ $isOpen }) => ($isOpen ? '20.6rem' : '20.6rem')};
  }

  & > span {
    color: ${({ theme }) => theme.text};
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }
`;

export const etc = styled.div``;
