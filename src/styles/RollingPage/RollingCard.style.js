import styled from 'styled-components';
import { getBadgeBgColor, getBadgeTextColor } from '../../utils/BadgeColor';

export const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.2s linear;

  @media (max-width: 800px) {
    padding: 2vw;
  }
  @media (max-width: 768px) {
    padding: 3vw;
  }
  @media (max-width: 430px) {
    padding: 3vw;
  }
  @media (max-width: 360px) {
    padding: 24px;
  }

  &:hover {
    cursor: pointer;
    width: 100%;
    transform: scale(1.02);
  }
`;

export const SenderFrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin-top: 4px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const ProfileImageDiv = styled.button`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 100px;
  border: 1px solid var(--gray200);
  background: var(--white);

  @media (max-width: 900px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 430px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 360px) {
    width: 56px;
    height: 56px;
  }

  & > img {
    width: 108px;
    height: 108px;
  }
`;

export const SenderInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  & > div > span {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    @media (max-width: 930px) {
      font-size: 2vw;
    }
    @media (max-width: 768px) {
      font-size: 3vw;
    }
    @media (max-width: 360px) {
      font-size: 16px;
    }
  }

  & > div > .name {
    font-weight: 700;
    margin-left: 6px;
  }
`;

export const BadgeDiv = styled.div`
  width: max-content;
  padding: 0px 8px;
  border-radius: 4px;
  background-color: ${({ $badge }) => getBadgeBgColor($badge)};
  color: ${({ $badge }) => getBadgeTextColor($badge)};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.07px;

  @media (max-width: 400px) {
    font-size: 10px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

export const ContentDiv = styled.div`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  margin-top: 16px;

  & p {
    height: 120px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--gray600);
    font-family: ${({ $font }) => $font};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.18px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      height: 130px;
      -webkit-line-clamp: 3;
    }
    @media (max-width: 500px) {
      font-size: 14px;
    }

    @media (max-width: 360px) {
      height: 150px;
      -webkit-line-clamp: 2;
      font-size: 15px;
    }
  }

  & > .date {
    height: auto;
    margin: 0px;
    color: var(--gray400);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.06px;
  }
`;

export const DeleteIconBtn = styled.button`
  visibility: ${({ $isEditMode }) => ($isEditMode ? 'visible' : 'hidden')};
  width: 40px;
  height: 40px;
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);
  margin-left: auto;

  @media (max-width: 900px) {
    width: 30px;
    height: 30px;
    padding: 3px;
  }
  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
    padding: 3px;
    margin-left: auto;
  }
  @media (max-width: 360px) {
    width: 40px;
    height: 40px;
    padding: 8px;
  }
`;
