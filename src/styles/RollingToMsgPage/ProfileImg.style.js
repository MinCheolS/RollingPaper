import styled from 'styled-components';

export const ProfileImgContentDiv = styled.div`
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
`;

export const etc = styled.div``;
