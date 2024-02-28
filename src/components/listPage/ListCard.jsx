import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardData from './CardData';
import LeftArrowIcon from '../../assets/icons/LeftArrowBtn.svg';
import RightArrowIcon from '../../assets/icons/RightArrowBtn.svg';

function ListCard() {
  const [cardData, setCardData] = useState({ popular: [], recent: [] });
  const [popularScroll, setPopularScroll] = useState(0);
  const [recentScroll, setRecentScroll] = useState(0);
  const [popularLength, setPopularLength] = useState(0);
  const [recentLength, setRecentLength] = useState(0);
  const CARD_WIDTH = 295;

  useEffect(() => {
    Promise.all([
      fetch('https://rolling-api.vercel.app/4-4/recipients/?sort=like'),
      fetch('https://rolling-api.vercel.app/4-4/recipients/'),
    ]).then(([popularRes, recentRes]) =>
      Promise.all([popularRes.json(), recentRes.json()]).then(
        ([popularData, recentData]) => {
          setCardData({
            popular: popularData.results,
            recent: recentData.results,
          });
          setPopularLength(popularData.results.length);
          setRecentLength(recentData.results.length);
        },
      ),
    );
  }, []);
  const onPopularPrevClickHandle = () => {
    setPopularScroll(popularScroll - CARD_WIDTH);
    setPopularLength(popularLength + 1);
  };
  const onPopularNextClickHandle = () => {
    setPopularScroll(popularScroll + CARD_WIDTH);
    setPopularLength(popularLength - 1);
  };
  const onRecentPrevClickHandle = () => {
    setRecentScroll(recentScroll - CARD_WIDTH);
    setRecentLength(recentLength + 1);
  };
  const onRecentNextClickHandle = () => {
    setRecentScroll(recentScroll + CARD_WIDTH);
    setRecentLength(recentLength - 1);
  };

  return (
    <>
      <CardListContainerSection>
        <CardListTitleH2>인기 롤링 페이퍼 🔥</CardListTitleH2>
        <div className="ListCardContent">
          {popularScroll ? (
            <PrevButton onClick={onPopularPrevClickHandle}>
              <img src={LeftArrowIcon} alt="왼쪽 화살표 아이콘" />
            </PrevButton>
          ) : null}
          <CardList>
            <CardData cardData={cardData.popular} translateX={popularScroll} />
          </CardList>
          {popularLength > 4 ? (
            <NextButton onClick={onPopularNextClickHandle}>
              <img src={RightArrowIcon} alt="오른쪽 화살표 아이콘" />
            </NextButton>
          ) : null}
        </div>
      </CardListContainerSection>

      <CardListContainerSection>
        <CardListTitleH2>최근에 만든 롤링 페이퍼 ⭐</CardListTitleH2>
        <div className="ListCardContent">
          {recentScroll ? (
            <PrevButton onClick={onRecentPrevClickHandle}>
              <img src={LeftArrowIcon} alt="왼쪽 화살표 아이콘" />
            </PrevButton>
          ) : null}
          <CardList>
            <CardData cardData={cardData.recent} translateX={recentScroll} />
          </CardList>
          {recentLength > 4 ? (
            <NextButton onClick={onRecentNextClickHandle}>
              <img src={RightArrowIcon} alt="오른쪽 화살표 아이콘" />
            </NextButton>
          ) : null}
        </div>
      </CardListContainerSection>
    </>
  );
}
export default ListCard;

const CardListContainerSection = styled.section`
  width: 1160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  .ListCardContent {
    position: relative;
  }
`;
const CardListTitleH2 = styled.h2`
  color: var(--black, #000);
  font-size: var(--font24, 2.4rem);
  font-weight: var(--bold, 700);
  line-height: 36px;
  letter-spacing: -0.24px;
`;
const CardList = styled.div`
  overflow: hidden;
`;
const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: -3rem;
  transform: translateY(-50%);
  z-index: 1;
`;
const NextButton = styled(PrevButton)`
  right: -3rem;
  left: initial;
`;
