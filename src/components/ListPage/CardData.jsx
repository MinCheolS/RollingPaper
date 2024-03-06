import React from 'react';
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

function CardData({ cardData, translateX }) {
  const commentImg = cardData.map((data) => data.recentMessages);
  const emoji = cardData.map((data) => data.topReactions.slice(0, 3));
  return (
    <CardListBoxDiv $translateX={translateX}>
      {cardData.map((list, index) => (
        <article key={list.id}>
          <CardWrapperLink
            to={`/post/${list.id}`}
            $bgColor={list.backgroundColor}
            $bgImg={list.backgroundImageURL}
          >
            <CardRecipientWrapperDiv>
              <CardRecipientDiv>To. {list.name}</CardRecipientDiv>
              <CardCommentImgBoxDiv>
                {commentImg[index].map((img) => (
                  <img
                    className="commentImg"
                    src={img.profileImageURL}
                    alt="코멘트 이미지"
                    key={img.id}
                  />
                ))}

                {commentImg[index].length >= 3 && (
                  <div className="commentImg">+ {list.messageCount - 3}</div>
                )}
              </CardCommentImgBoxDiv>
              <CardCommentCountDiv>
                {commentImg[index].length > 0 ? (
                  <>
                    <span className="CommentCount">{list.messageCount} </span>
                    명이 작성했어요!
                  </>
                ) : (
                  <span className="CommentCount">
                    작성자가 없어요 작성해주세요!
                  </span>
                )}
              </CardCommentCountDiv>
            </CardRecipientWrapperDiv>
            <CardReactionWrapperDiv>
              {emoji[index].map((reaction) => (
                <CardReactionDiv key={reaction.id}>
                  {reaction.emoji}
                  <span className="ReactionCount">{reaction.count}</span>
                </CardReactionDiv>
              ))}
            </CardReactionWrapperDiv>
          </CardWrapperLink>
        </article>
      ))}
    </CardListBoxDiv>
  );
}
CardData.propTypes = {
  cardData: PropTypes.instanceOf(Array).isRequired,
  translateX: PropTypes.number.isRequired,
};

export default CardData;
