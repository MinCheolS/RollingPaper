import React, { useEffect, useState } from 'react';
import CardData from './CardData';
import {
  CardList,
  CardListContainerSection,
  CardListTitleH2,
  NextButton,
  PrevButton,
} from '../../styles/ListPage/ListCard.style';
import { getRecipients } from '../../apis/api';

function ListCard() {
  const [popularData, setPopularData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [popularScroll, setPopularScroll] = useState(0);
  const [recentScroll, setRecentScroll] = useState(0);
  const [popularLength, setPopularLength] = useState(0);
  const [recentLength, setRecentLength] = useState(0);
  const CARD_WIDTH = 295;

  useEffect(() => {
    getRecipients(100).then(({ results }) => {
      const sortedPopularData = results.sort(
        (a, b) => b.reactionCount - a.reactionCount,
      );
      setPopularData(sortedPopularData.slice(0, 8));
      setPopularLength(sortedPopularData.slice(0, 8).length);

      const sortedRecentData = results.sort(
        (a, b) => a.reactionCount - b.reactionCount,
      );
      setRecentData(sortedRecentData.slice(0, 8));
      setRecentLength(sortedRecentData.slice(0, 8).length);
    });
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
            <CardData cardData={popularData} translateX={popularScroll} />
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
            <CardData cardData={recentData} translateX={recentScroll} />
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
