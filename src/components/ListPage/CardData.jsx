import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardCommentCountDiv,
  CardCommentImgBoxDiv,
  CardListBoxDiv,
  CardReactionDiv,
  CardReactionWrapperDiv,
  CardRecipientDiv,
  CardRecipientWrapperDiv,
  CardWrapperLink,
} from '../../styles/ListPage/CardData.style';
import {
  CardDataSkeletonContainerDiv,
  CardDataSkeletonDiv,
  CardDataSkeletonWrapper,
} from '../../styles/ListPage/CardDataSkeleton.style';

function CardData({ cardData, translateX }) {
  const [isLoading, setIsLoading] = useState(true);
  const commentImg = cardData.map((data) => data.recentMessages);
  const emoji = cardData.map((data) => data.topReactions.slice(0, 3));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return (
      <CardDataSkeletonWrapper>
        <CardDataSkeletonContainerDiv>
          {new Array(4).fill(1).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <CardDataSkeletonDiv key={i} />
          ))}
        </CardDataSkeletonContainerDiv>
      </CardDataSkeletonWrapper>
    );
  }

  return (
    <CardListBoxDiv $translateX={translateX}>
      {cardData.map((list, index) => {
        const commentImages = commentImg[index];
        const topReactions = emoji[index];

        return (
          <article key={list.id}>
            <CardWrapperLink
              to={`/post/${list.id}`}
              $bgColor={list.backgroundColor}
              $bgImg={list.backgroundImageURL}
            >
              <CardRecipientWrapperDiv>
                <CardRecipientDiv>To. {list.name}</CardRecipientDiv>
                <CardCommentImgBoxDiv>
                  {commentImages.map((img) => (
                    <img
                      className="commentImg"
                      src={img.profileImageURL}
                      alt="코멘트 이미지"
                      key={img.id}
                    />
                  ))}

                  {commentImages.length >= 3 && (
                    <div className="commentImg">+ {list.messageCount - 3}</div>
                  )}
                </CardCommentImgBoxDiv>
                <CardCommentCountDiv>
                  {commentImages.length > 0 ? (
                    <>
                      <span className="CommentCount">{list.messageCount} </span>
                      명이 작성했어요!
                    </>
                  ) : (
                    <span className="CommentCount">작성자가 없어요...</span>
                  )}
                </CardCommentCountDiv>
              </CardRecipientWrapperDiv>
              <CardReactionWrapperDiv>
                {topReactions.map((reaction) => (
                  <CardReactionDiv key={reaction.id}>
                    {reaction.emoji}
                    <span className="ReactionCount">{reaction.count}</span>
                  </CardReactionDiv>
                ))}
              </CardReactionWrapperDiv>
            </CardWrapperLink>
          </article>
        );
      })}
    </CardListBoxDiv>
  );
}

CardData.propTypes = {
  cardData: PropTypes.instanceOf(Array).isRequired,
  translateX: PropTypes.number.isRequired,
};

export default CardData;
