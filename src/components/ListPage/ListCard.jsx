import React, { useEffect, useState } from 'react';
import CardData from './CardData';
import {
  CardList,
  CardListContainerSection,
  CardListTitleH2,
  NextButton,
  PrevButton,
} from '../../styles/ListPage/ListCard.style';

function ListCard() {
  const [cardData, setCardData] = useState({ popular: [], recent: [] });
  const [popularScroll, setPopularScroll] = useState(0);
  const [recentScroll, setRecentScroll] = useState(0);
  const [popularLength, setPopularLength] = useState(0);
  const [recentLength, setRecentLength] = useState(0);
  const CARD_WIDTH = 295;

  useEffect(() => {
    Promise.all([
      fetch('https://rolling-api.vercel.app/4-3/recipients/?sort=like'),
      fetch('https://rolling-api.vercel.app/4-3/recipients/'),
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
            <PrevButton onClick={onPopularPrevClickHandle} />
          ) : null}
          <CardList>
            <CardData cardData={cardData.popular} translateX={popularScroll} />
          </CardList>
          {popularLength > 4 ? (
            <NextButton onClick={onPopularNextClickHandle} />
          ) : null}
        </div>
      </CardListContainerSection>

      <CardListContainerSection>
        <CardListTitleH2>최근에 만든 롤링 페이퍼 ⭐</CardListTitleH2>
        <div className="ListCardContent">
          {recentScroll ? (
            <PrevButton onClick={onRecentPrevClickHandle} />
          ) : null}
          <CardList>
            <CardData cardData={cardData.recent} translateX={recentScroll} />
          </CardList>
          {recentLength > 4 ? (
            <NextButton onClick={onRecentNextClickHandle} />
          ) : null}
        </div>
      </CardListContainerSection>
    </>
  );
}
export default ListCard;
