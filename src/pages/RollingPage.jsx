import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';
import RollingCard from '../components/RollingPage/RollingCard';
import DetailCard from '../components/RollingPage/DetailCard';
// import cardList from '../constants/CardLists';
import AddCard from '../components/RollingPage/AddCard';
import Header from '../components/Common/Header/Header';
import RollingPageHeader from '../components/RollingPage/RollingHeader/RollingPageHeader';
import Toast from '../components/Common/Toast';
import {
  deleteMsgData,
  getCardData,
  getUserInfo,
  getReactionData,
} from '../apis/api';
import {
  ContainerDiv,
  EditBtn,
  CompleteBtn,
  CardsListsDiv,
} from '../styles/RollingPage/RollingPage.style';

function RollingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cardlist, setCardlist] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isSharedToastVisible, setIsSharedToastVisible] = useState(false);
  const [deleteMsgId, setDeleteMsgId] = useState('');
  const [deleteMsgIdArr, setDeleteMsgIdArr] = useState([]);
  const [nextCard, setNextCard] = useState(null);
  const [sendToHeaderData, setSendToHeaderData] = useState({});

  const fetchDataForRollingPage = async () => {
    try {
      setLoading(true);
      const [messages, useInfo, reactionList] = await Promise.all([
        getCardData(id),
        getUserInfo(id),
        getReactionData(id),
      ]);

      const newCardList = messages.results; // 무한 스크롤을 위한 변수 선언
      setCardlist(newCardList);
      setNextCard(messages.next);

      setUserInfo(useInfo);
      setSendToHeaderData({
        // 헤더에 보내줄 데이터
        reactionList: reactionList.results,
        topReactions: useInfo.topReactions,
      });

      setBackgroundColor(useInfo.backgroundColor);
      setBackgroundImage(useInfo.backgroundImageURL);
    } catch (error) {
      // 오류 처리
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataForRollingPage();
  }, []);

  // 무한 스크롤 구현
  const lastCardRef = useRef(null);

  const loadMoreData = async () => {
    try {
      setLoading(true);

      if (nextCard) {
        const response = await fetch(`${nextCard}`);
        if (response.ok) {
          const messages = await response.json();
          setCardlist((prevData) => [...prevData, ...messages.results]);
          setNextCard(messages.next);
        } else {
          console.error(`Failed to fetch data. Status: ${response.status}`);
        }
      } else setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onIntersectionHandle = async (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !loading) {
        loadMoreData();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersectionHandle, {
      threshold: 1,
    });

    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }

    return () => {
      if (lastCardRef.current) {
        observer.unobserve(lastCardRef.current);
      }
    };
  }, [id, loading]);

  // 카드 지우기
  useEffect(() => {
    if (deleteMsgId) {
      setDeleteMsgIdArr((prevArr) => [...prevArr, deleteMsgId]);
      setCardlist((prevItems) =>
        prevItems.filter((card) => card.id !== deleteMsgId),
      );
    }
  }, [deleteMsgId]);

  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [clickedUser, setClickedUser] = useState({});

  const onDetailClickHandle = (clickedCard) => {
    setIsDetailVisible(!isDetailVisible);
    setClickedUser(clickedCard);
  };

  const onEditModClickHandle = () => {
    setIsEditMode(true);
  };

  const onDeleteCheckClickHandle = () => {
    setIsEditMode(false);
    if (deleteMsgIdArr[0]) {
      deleteMsgIdArr.map((deleteId) => {
        return deleteMsgData(deleteId);
      });
    }
  };

  const onAddCardClickHandle = () => {
    navigate(`/post/${id}/message`);
  };

  return (
    userInfo.name && (
      <>
        <Toast
          setShowToast={setIsSharedToastVisible}
          showToast={isSharedToastVisible}
        />
        <DetailCard
          $visible={isDetailVisible}
          onClick={onDetailClickHandle}
          card={clickedUser}
        />
        <ContainerDiv $bgColor={backgroundColor} $bgImg={backgroundImage}>
          <Header name={String(userInfo.name)} />
          <RollingPageHeader
            name={userInfo.name}
            id={id}
            messageCount={userInfo.messageCount}
            cardList={cardlist}
            setIsSharedToastVisible={setIsSharedToastVisible}
            getFromRollingData={sendToHeaderData}
          />
          <div className="Div">
            {cardlist[0] && (
              <>
                <EditBtn
                  $isEditMode={isEditMode}
                  onClick={onEditModClickHandle}
                >
                  <DeleteIcon />
                  삭제하기
                </EditBtn>
                <CompleteBtn
                  $isEditMode={isEditMode}
                  onClick={onDeleteCheckClickHandle}
                >
                  수정완료
                </CompleteBtn>
              </>
            )}
            <CardsListsDiv>
              <AddCard onClick={onAddCardClickHandle} />
              {cardlist.length !== 0
                ? cardlist.map((card, index) => {
                    const isLastCard = index === cardlist.length - 1;
                    return (
                      <RollingCard
                        key={card.id}
                        id={card.id}
                        sender={card.sender}
                        relationship={card.relationship}
                        createdAt={card.createdAt}
                        content={card.content}
                        font={card.font}
                        profileImageURL={card.profileImageURL}
                        $isEditMode={isEditMode}
                        onClick={() => onDetailClickHandle(card)}
                        setDeleteId={setDeleteMsgId}
                        ref={isLastCard ? lastCardRef : null}
                      />
                    );
                  })
                : null}
            </CardsListsDiv>
          </div>
        </ContainerDiv>
      </>
    )
  );
}

export default RollingPage;
