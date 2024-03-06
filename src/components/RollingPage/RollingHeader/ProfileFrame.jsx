import React from 'react';
import PropTypes from 'prop-types';
import senderProfileImage from '../../../assets/images/senderProfileImage.png';
import {
  ProfileFrameDiv,
  NumberP,
} from '../../../styles/RollingPage/RollingHeader.style';

function ProfileFrame({ type, left, number, profileImgURL }) {
  return (
    <ProfileFrameDiv $left={left} type={type}>
      <NumberP type={type}>+{number}</NumberP>
      <img src={profileImgURL || senderProfileImage} alt="profile" />
    </ProfileFrameDiv>
  );
}

ProfileFrame.propTypes = {
  left: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.number,
  profileImgURL: PropTypes.string,
};

ProfileFrame.defaultProps = {
  left: 'auto',
  type: '',
  number: 0,
  profileImgURL: '',
};

export default ProfileFrame;
