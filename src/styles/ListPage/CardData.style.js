import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getBgColor } from '../../utils/BgItem';

export const CardListBoxDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  max-width: 1160px;
  transition: transform 0.4s ease;
  transform: ${({ $translateX }) => `translateX(-${$translateX}px)`};
`;

export const CardWrapperLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  width: 275px;
  height: 260px;
  padding: 30px 24px 20px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${({ $bgColor }) => getBgColor($bgColor)};
  background-image: ${({ $bgImg }) => `url(${$bgImg})`};
  background-size: cover;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  @media all and (max-width: 768px) {
    width: 208px;
    height: 232px;
    gap: 33px;
  }
`;
export const CardRecipientWrapperDiv = styled.div`
  color: ${({ theme }) => theme.text};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: ${({ theme }) =>
    theme.mode === 'light'
      ? 'rgba(255, 255, 255, 0.5)'
      : 'rgba(0, 0, 0, 0.5);'};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 16px;
  @media all and (max-width: 768px) {
    height: 100px;
    padding: 10px;
  }
`;

export const CardRecipientDiv = styled.div`
  font-size: var(--font24, 2.4rem);
  font-weight: var(--bold, 700);
  line-height: 36px;
  letter-spacing: -0.24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media all and (max-width: 768px) {
    font-size: var(--font18, 1.8rem);
    font-weight: var(--bold, 700);
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.18px;
  }
`;
export const CardCommentImgBoxDiv = styled.div`
  display: flex;
  position: relative;
  .commentImg {
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 1.5px solid var(--white, #fff);
    background: var(--white, #fff);
    &:nth-child(2) {
      position: absolute;
      left: 16px;
    }
    &:nth-child(3) {
      position: absolute;
      left: 32px;
    }
    &:nth-child(4) {
      width: fit-content;
      position: absolute;
      left: 48px;
      padding: 5px 6px;
      color: var(--gray500, #555);
      font-size: var(--font12, 1.2rem);
      font-weight: var(--regular, 400);
      line-height: 18px;
      letter-spacing: -0.06px;
    }
    @media all and (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
export const CardCommentCountDiv = styled.div`
  font-size: var(--font16, 1.6rem);
  font-weight: var(--regular, 400);
  line-height: 26px;
  letter-spacing: -0.16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .CommentCount {
    font-weight: var(--bold, 700);
  }
  @media all and (max-width: 768px) {
    font-size: var(--font14, 1.4rem);
    font-weight: var(--regular, 400);
    line-height: 20px;
    letter-spacing: -0.07px;
    .CommentCount {
      font-weight: var(--bold, 700);
    }
  }
`;
export const CardReactionWrapperDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  @media all and (max-width: 768px) {
    gap: 4px;
  }
`;

export const CardReactionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  font-size: var(--font16, 1.6rem);
  font-weight: var(--regular, 400);
  line-height: 21px;
  .ReactionCount {
    color: #fff;
    line-height: 20px;
  }
  @media all and (max-width: 768px) {
    padding: 6px 8px;
    font-size: var(--font14, 1.4rem);
    letter-spacing: -0.07px;
  }
`;
