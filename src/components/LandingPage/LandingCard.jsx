import React from 'react';
import { PropTypes } from 'prop-types';
import LandingImg1 from '../../assets/images/landing1.png';
import LandingImg2 from '../../assets/images/landing2.png';
import DarkLandingImg1 from '../../assets/images/darkLanding1.png';
import DarkLandingImg2 from '../../assets/images/darkLanding2.png';
import {
  CardContainerDiv,
  CardContainerSection,
  CardWrapperDiv,
  CardBadgeDiv,
  CardDescDiv,
} from '../../styles/LandingPage/LandingCard.style';

function LandingCard({ theme }) {
  const cards = [
    {
      id: 1,
      point: 'Point. 01',
      title: '누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요',
      description: '로그인 없이 자유롭게 만들어요.',
      imgSrc: theme ? LandingImg1 : DarkLandingImg1,
    },
    {
      id: 2,
      point: 'Point. 02',
      title: '서로에게 이모지로 감정을 표현해보세요',
      description: '롤링 페이퍼에 이모지를 추가할 수 있어요.',
      imgSrc: theme ? LandingImg2 : DarkLandingImg2,
    },
  ];

  return (
    <CardContainerDiv>
      {cards.map((card) => (
        <CardContainerSection key={card.id} $even={card.id % 2 === 0}>
          <CardWrapperDiv>
            <CardBadgeDiv>{card.point}</CardBadgeDiv>
            <CardDescDiv>
              <h2 className="Title">{card.title}</h2>
              <p className="Description">{card.description}</p>
            </CardDescDiv>
          </CardWrapperDiv>
          <img
            src={card.imgSrc}
            alt="랜딩 페이지 이미지"
            className="LandingImg"
          />
        </CardContainerSection>
      ))}
    </CardContainerDiv>
  );
}

LandingCard.propTypes = {
  theme: PropTypes.bool.isRequired,
};
export default LandingCard;
