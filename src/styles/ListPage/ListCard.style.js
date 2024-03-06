import styled from 'styled-components';

export const CardListContainerSection = styled.section`
  width: 1160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  .ListCardContent {
    position: relative;
    width: 100%;
  }
  @media all and (max-width: 1248px) {
    width: 100%;
  }
`;

export const CardListTitleH2 = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: var(--font24, 2.4rem);
  font-weight: var(--bold, 700);
  line-height: 36px;
  letter-spacing: -0.24px;
`;

export const CardList = styled.div`
  overflow: hidden;

  @media all and (max-width: 1248px) {
    overflow: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: -2rem;
  transform: translateY(-50%);
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.borderBottom};
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 8px #0006;
  z-index: 5;
  &::before {
    content: '＜';
    font-size: var(--font24, 2.4rem);
    color: ${({ theme }) => theme.text};
    line-height: 4rem;
  }
  @media all and (max-width: 1248px) {
    display: none;
  }
`;

export const NextButton = styled(PrevButton)`
  right: -2rem;
  left: initial;
  &::before {
    content: '＞';
  }
`;
