import React from 'react';
import PropTypes from 'prop-types';
import {
  BackgroundDiv,
  ContainerDiv,
  SenderFrameDiv,
  ProfileImageDiv,
  SenderInfoDiv,
  BadgeDiv,
  ContentDiv,
  CheckButton,
} from '../../styles/RollingPage/DetailCard.style';

function DetailCard({ $visible, onClick = null, card }) {
  const { font } = card;

  let date = '';
  if (card.createdAt) {
    const year = card.createdAt.substring(0, 4);
    const month = card.createdAt.substring(5, 7);
    const day = card.createdAt.substring(8, 10);
    // const hour = createdAt.substring(11, 13);
    // const minute = createdAt.substring(14, 16);
    date = `${year}.${month}.${day}`;
  }

  return (
    <BackgroundDiv $visible={$visible}>
      <ContainerDiv $visible={$visible}>
        <SenderFrameDiv>
          <div>
            <ProfileImageDiv>
              <img src={card.profileImageURL} alt={card.sender} />
            </ProfileImageDiv>
            <SenderInfoDiv>
              <div>
                <span>From.</span>
                <span className="name">{card.sender}</span>
              </div>
              <BadgeDiv $badge={card.relationship}>
                {card.relationship}
              </BadgeDiv>
            </SenderInfoDiv>
          </div>
          <p className="date">{date}</p>
        </SenderFrameDiv>
        <ContentDiv $font={font}>
          <p dangerouslySetInnerHTML={{ __html: card.content }} />
        </ContentDiv>
        <CheckButton onClick={() => onClick()}>확인</CheckButton>
      </ContainerDiv>
    </BackgroundDiv>
  );
}

DetailCard.propTypes = {
  $visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  card: PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    relationship: PropTypes.string,
    createdAt: PropTypes.string,
    content: PropTypes.string,
    profileImageURL: PropTypes.string,
    font: PropTypes.string,
  }),
};

DetailCard.defaultProps = {
  card: {
    id: 0,
    sender: '',
    relationship: '',
    createdAt: '',
    content: '',
    profileImageURL: '',
    font: '',
  },
};

export default DetailCard;
