import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emoji-picker-react';
import { ReactComponent as Arrow } from '../../../assets/icons/arrowDown.svg';
import { ReactComponent as AddEmotion } from '../../../assets/icons/add_emotion.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/shareBtn.svg';
import Emoticon from './Emoticon';
import EmoticonDetail from './EmoticonDetail';
import NumOfWritingPeople from './NumOfWritingPeople';
import {
  MainContainerHeader,
  UserH1,
  DividerDiv,
  EmoticonDiv,
  BestEmoticonDiv,
  EmoticonDetailButton,
  AddEmotionButton,
  ShareButton,
  ShareOptionDiv,
  ShareOptionBtn,
} from './RollingHeader.style';
import {
  getReactionData,
  postReactionData,
  getUserInfo,
} from '../../../apis/api';
import useOutsideClose from '../../../hooks/useOutsideClose';
import { ShareList } from './ShareList';

function RollingPageHeader({
  name,
  id,
  messageCount,
  cardList,
  setIsSharedToastVisible,
  getFromRollingData,
}) {
  const [isEmojiPickerVisible, setIsEmojiPickerVsiible] = useState(false);
  const [isEmoticonDetailVisible, setIsEmotionDetailVisible] = useState(false);
  const [isShareVisible, setIsShareVisible] = useState(false);
  const [userReactionList, setUserReactionList] = useState([]);
  const [topReactions, setTopReactions] = useState([]);

  useEffect(() => {
    setTopReactions(getFromRollingData.topReactions);
    setUserReactionList(getFromRollingData.reactionList);
  }, []);

  // 새롭게 이모티콘 생성 시 POST 요청 후, 다시 GET 요청으로 리스트 변경
  const onEmojiPickerHandle = async (emojiData) => {
    const updatedEmojiFormData = {
      emoji: emojiData.emoji,
      type: 'increase',
    };
    await postReactionData(updatedEmojiFormData, id);
    const userReactions = await getReactionData(id);
    const newReactionList = userReactions.results;

    const userInfo = await getUserInfo(id);
    const newTopReactions = userInfo.topReactions;

    setUserReactionList(newReactionList);
    setTopReactions(newTopReactions);
  };
  const emojiPickerRef = useRef(null);
  const emojiDetailRef = useRef(null);
  const shareRef = useRef(null);

  const onAddEmojiBtnHandle = () => {
    setIsEmojiPickerVsiible(!isEmojiPickerVisible);
    setIsEmotionDetailVisible(false);
  };

  const onEmoticonDetailBtnHandle = () => {
    setIsEmotionDetailVisible(!isEmoticonDetailVisible);
    setIsEmojiPickerVsiible(false);
  };

  const onSharedBtnHandle = () => {
    setIsShareVisible(!isShareVisible);
  };

  const onSharedClickHandle = (item) => {
    const itemUrl = window.location.href;
    const title = `${name}님의 롤링페이퍼입니다.`;

    if (item === '카카오톡 공유') {
      setIsSharedToastVisible(true);

      if (window.Kakao) {
        const kakao = window.Kakao;
        console.log(kakao);
        if (!kakao.isInitialized()) {
          kakao.init(process.env.REACT_APP_KAKAO_KEY);
          console.log(process.env.REACT_APP_KAKAO_KEY);
        }

        kakao.Link.sendDefault({
          objectType: 'feed',
          content: {
            title,
            description: '🥰내 롤링페이퍼로 오세요🥰',
            imageUrl: `https://github.com/MinCheolS/RollingPaper/blob/dev/src/assets/images/shareLogo.png?raw=true`,
            link: {
              webUrl: itemUrl,
            },
          },
          buttons: [
            {
              title,
              link: {
                webUrl: itemUrl,
              },
            },
          ],
        });
        kakao.cleanup();
      }
    } else {
      setIsSharedToastVisible(true);
      navigator.clipboard.writeText(itemUrl);
    }
  };

  const threePeople = cardList.slice(0, 3);

  useOutsideClose(emojiPickerRef, setIsEmojiPickerVsiible);
  useOutsideClose(emojiDetailRef, setIsEmotionDetailVisible);
  useOutsideClose(shareRef, setIsShareVisible);

  return (
    <MainContainerHeader>
      <div className="HeaderContainer">
        <UserH1>To. {name}</UserH1>
        <div>
          <NumOfWritingPeople
            messageCount={messageCount}
            threePeople={threePeople}
          />
          <DividerDiv $marginLeft="26px" id="hiddenAtMobile" />
          <EmoticonDiv>
            <BestEmoticonDiv>
              {topReactions.map((reaction) => (
                <Emoticon
                  key={reaction.id}
                  emoticon={reaction.emoji}
                  count={reaction.count}
                />
              ))}
            </BestEmoticonDiv>
            <EmoticonDetail
              isVisible={isEmoticonDetailVisible}
              emojilist={userReactionList}
            />
            <EmoticonDetailButton
              ref={emojiDetailRef}
              onClick={() => onEmoticonDetailBtnHandle()}
            >
              <Arrow />
            </EmoticonDetailButton>
            <AddEmotionButton
              ref={emojiPickerRef}
              onClick={() => {
                onAddEmojiBtnHandle();
              }}
            >
              <AddEmotion />
              <span>추가</span>
            </AddEmotionButton>
            <div id="EmojiPicker">
              <EmojiPicker
                open={isEmojiPickerVisible}
                onEmojiClick={onEmojiPickerHandle}
              />
            </div>
          </EmoticonDiv>
          <DividerDiv $marginLeft="13px" id="shrinkAtMobile" />
          <ShareButton ref={shareRef} onClick={() => onSharedBtnHandle()}>
            <ShareIcon />
          </ShareButton>
          {isShareVisible && (
            <ShareOptionDiv>
              {ShareList.map((item) => (
                <ShareOptionBtn
                  key={item}
                  onClick={() => onSharedClickHandle(item)}
                >
                  {item}
                </ShareOptionBtn>
              ))}
            </ShareOptionDiv>
          )}
        </div>
      </div>
    </MainContainerHeader>
  );
}

RollingPageHeader.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  messageCount: PropTypes.number,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      profileImageURL: PropTypes.string,
    }),
  ),
  getFromRollingData: PropTypes.shape({
    reactionList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        emoji: PropTypes.string,
        count: PropTypes.number,
      }),
    ),
    topReactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        emoji: PropTypes.string,
        count: PropTypes.number,
      }),
    ),
  }),
  setIsSharedToastVisible: PropTypes.func,
};

RollingPageHeader.defaultProps = {
  name: '',
  id: '',
  messageCount: 0,
  cardList: [],
  setIsSharedToastVisible: null,
  getFromRollingData: {},
};

export default RollingPageHeader;
