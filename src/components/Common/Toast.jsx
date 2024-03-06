import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Completed from '../../assets/icons/completed.svg';
import Close from '../../assets/icons/close.svg';
import {
  ContainerDiv,
  ToastBoxDiv,
  ToastCompleted,
} from '../../styles/Common/Toast.style';

function Toast({ showToast, setShowToast }) {
  // Toast 5초뒤에 꺼지는 코드

  useEffect(() => {
    let timeout;

    if (showToast) {
      timeout = setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showToast]);

  return (
    <ContainerDiv>
      <ToastBoxDiv $showToast={showToast}>
        <ToastCompleted>
          <img src={Completed} alt="성공 아이콘" />
          <span className="CompletedText">URL이 복사 되었습니다.</span>
        </ToastCompleted>
        <button type="button" onClick={() => setShowToast(false)}>
          <img src={Close} alt="닫기 아이콘" />
        </button>
      </ToastBoxDiv>
    </ContainerDiv>
  );
}

Toast.propTypes = {
  showToast: PropTypes.bool.isRequired,
  setShowToast: PropTypes.func.isRequired,
};

export default Toast;
