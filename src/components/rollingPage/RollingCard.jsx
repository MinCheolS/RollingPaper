import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getBadgeBgColor, getBadgeTextColor } from '../../utils/BadgeColor';

function RollingCard({
  name = '김동훈',
  badge = '동료',
  date,
  imgUrl,
  content,
}) {
  return (
    <ContainerDiv>
      <SenderFrameDiv>
        <ProfileImageDiv>
          <img src={imgUrl} alt={name} />
        </ProfileImageDiv>
        <SenderInfoDiv>
          <div>
            <span>From.</span>
            <span className="name">{name}</span>
          </div>
          <BadgeDiv badge={badge}>{badge}</BadgeDiv>
        </SenderInfoDiv>
      </SenderFrameDiv>
      <ContentDiv>
        <p>{content}</p>
        <p className="date">{date}2023.07.08</p>
      </ContentDiv>
    </ContainerDiv>
  );
}

RollingCard.propTypes = {
  name: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const ContainerDiv = styled.div`
  width: 384px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const SenderFrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  padding: 28px 24px 15px;
`;

const ProfileImageDiv = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 100px;
  border: 1px solid var(--gray200);
  background: var(--white);

  & > img {
    width: 108px;
    height: 108px;
  }
`;

const SenderInfoDiv = styled.div`
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
  }

  & > div > .name {
    font-weight: 700;
    margin-left: 6px;
  }
`;

const BadgeDiv = styled.div`
  width: max-content;
  padding: 0px 8px;
  border-radius: 4px;
  background-color: ${({ badge }) => getBadgeBgColor(badge)};
  color: ${({ badge }) => getBadgeTextColor(badge)};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.07px;
`;

const ContentDiv = styled.div`
  width: 336px;
  height: 106px;
  flex-shrink: 0;
  margin: 16px auto;

  & > p {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: var(--gray600);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.18px;
    margin-bottom: 16px;
  }

  & > .date {
    color: var(--gray400);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.06px;
  }
`;

export default RollingCard;
