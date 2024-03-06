import styled from 'styled-components';
import { ContainerHeader } from '../../Common/Header/Header.style';

// RollingHeader.style
export const MainContainerHeader = styled(ContainerHeader)`
  cursor: default;
  & .HeaderContainer {
    padding: 13px auto;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin: 0px;
      @media (max-width: 1248px) {
        margin: 0px;
      }
    }
  }
  @media (max-width: 520px) {
    padding: 0px 15px;
  }
  @media (max-width: 360px) {
    padding: 0px 24px;
  }
`;

export const UserH1 = styled.h1`
  width: max-width;
  color: var(--gray800);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.28px;
  cursor: pointer;

  @media (max-width: 908px) {
    font-size: 2.5vw;
  }
  @media (max-width: 768px) {
    font-size: 3.3vw;
  }
  @media (max-width: 360px) {
    display: none;
  }
`;

export const EmoticonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;

  & > #EmojiPicker {
    position: absolute;
    top: 42px;
    transform: translateX(00%);
  }

  @media (max-width: 768px) {
    gap: 0px;
  }
`;

export const BestEmoticonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: relative;

  @media (max-width: 500px) {
    gap: 3px;
  }
  @media (max-width: 368px) {
    gap: auto;
  }
`;

export const EmoticonDetailButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 6px;

  @media (max-width: 500px) {
    width: 30px;
  }

  & > svg:hover {
    background-color: var(--gray200);
  }
`;

export const AddEmotionButton = styled.button`
  width: max-content;
  padding: 6px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);

  &:hover {
    background-color: var(--gray200);
  }

  @media (max-width: 900px) {
    padding: 6px 10px;
  }

  @media (max-width: 500px) {
    padding: 6px 5px;
  }

  @media (max-width: 368px) {
    & > span {
      display: none;
    }
  }
`;

export const DividerDiv = styled.div`
  width: 1px;
  height: 28px;
  background-color: var(--gray200);
  margin: 0px ${({ $marginLeft }) => $marginLeft};

  &#hiddenAtMobile {
    @media (max-width: 900px) {
      margin: 0px 10px;
    }
    @media (max-width: 368px) {
      display: none;
    }
  }

  &#shrinkAtMobile {
    margin: 0px 11px;
    @media (max-width: 500px) {
      margin: 0px 5px;
    }
  }
`;

export const ShareButton = styled(AddEmotionButton)`
  & > svg {
    width: 20px;
    height: 20px;
  }
`;

export const ShareOptionDiv = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 12rem;
  padding: 1rem 0.1rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray300);
  background-color: var(--white);
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
  z-index: 1;
`;

export const ShareOptionBtn = styled.button`
  width: 13.6rem;
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  color: var(--gray900);
  font-size: var(--font16);
  font-weight: var(--regular);
  line-height: 1.625;
  letter-spacing: -0.016rem;

  &:hover {
    background-color: var(--gray100);
  }
`;

// ProfilFrame.style
export const ProfileFrameDiv = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  border: ${({ type }) =>
    type === 'image' ? '2px solid #FFF' : '1px solid #e3e3e3'};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${({ $left }) => $left || '0px'};
  background-color: var(--white);

  & > img {
    display: ${({ type }) => (type === 'image' ? 'block' : 'none')};
    width: 200%;
    height: 200%;
  }
`;

export const NumberP = styled.p`
  display: ${({ type }) => (type === 'number' ? 'block' : 'none')};
  font-family: Pretendard;
  font-size: 12px;
  color: #484848;
  font-weight: 500;
`;

// Emoticon.style
export const EmoticonFrameDiv = styled.div`
  width: max-content;
  padding: 8px 12px;
  gap: 10px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 900px) {
    padding: 8px 10px;
  }

  @media (max-width: 500px) {
    padding: 8px 5px;
  }

  @media (max-width: 368px) {
    padding: 4px 8px;
    border-radius: 20px;
  }
`;

export const EmoticonSpan = styled.span`
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  & > span {
    margin-right: 5px;

    @media (max-width: 500px) {
      margin-right: 3px;
      font-size: 13px;
    }
  }
`;

// EmoticonDetai.style
export const EmoticonDetaiDiv = styled.div`
  width: auto;
  height: auto;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  padding: 24px;
  background-color: var(--white);
  border: 1px solid #b6b6b6;
  border-radius: 8px;
  position: absolute;
  top: 42px;
`;

export const EmoticonsDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(4, auto);
  gap: 10px 8px;

  @media (max-width: 368px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(3, auto);
  }
`;

// NumOfWritingPeople.style
export const NumOfWritingPeopleDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  & > p {
    color: var(--gray900);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;

    & > .number {
      font-weight: 700;
    }

    @media (max-width: 900px) {
      font-size: 2vw;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const EclipseDiv = styled.div`
  width: 76px;
  height: 28px;
  display: flex;
  flex-direction: row;
  position: relative;
`;
