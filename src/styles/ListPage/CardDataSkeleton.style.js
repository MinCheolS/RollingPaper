import styled, { keyframes } from 'styled-components';

export const CardDataSkeletonWrapper = styled.div`
  overflow: hidden;
`;

export const CardDataSkeletonContainerDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 1160px;
`;

const loadingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

export const CardDataSkeletonDiv = styled.div`
  width: 275px;
  height: 260px;
  border: 1px solid
    ${({ theme }) => (theme.mode === 'light' ? '#ededed' : '#24262b')};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -180px;
    width: 300px;
    height: 100%;
    background: ${({ theme }) =>
      theme.mode === 'light'
        ? 'linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2)'
        : 'linear-gradient(to right, #333, #555, #333)'};
    animation: ${loadingAnimation} 2s infinite linear;
  }
  @media all and (max-width: 768px) {
    width: 208px;
    height: 232px;
    gap: 33px;
  }
`;
