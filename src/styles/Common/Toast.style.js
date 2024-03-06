import styled, { css, keyframes } from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const timer = keyframes`
  from{
    width: 100%;
  }to{
    width: 0%;
  }
`;

export const timerAnimation = css`
  animation: ${timer} 5s linear;
`;

export const ToastBoxDiv = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100vw - 48px);
  max-width: 524px;
  height: 64px;
  padding: 19px 30px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({ $showToast }) => ($showToast ? '1' : '0')};
  transform: translateY(${({ $showToast }) => ($showToast ? '-70px' : '0px')});
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35);
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 0;
    background-color: #40f467;
    border-radius: 0 0 8px 8px;
    ${({ $showToast }) => ($showToast ? timerAnimation : '')};
  }
`;

export const ToastCompleted = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .CompletedText {
    color: var(--white, #fff);
    font-size: var(--font16, 1.6rem);
    font-weight: var(--regular, 400);
    line-height: 26px;
    letter-spacing: -0.16px;
  }
`;
