import React from 'react';
import { PropTypes } from 'prop-types';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { AddCardDiv, PlusFrame } from '../../styles/RollingPage/AddCard.style';

function AddCard({ onClick }) {
  return (
    <AddCardDiv onClick={() => onClick()}>
      <PlusFrame>
        <Plus />
      </PlusFrame>
    </AddCardDiv>
  );
}

AddCard.propTypes = {
  onClick: PropTypes.func,
};

AddCard.defaultProps = {
  onClick: null,
};

export default AddCard;
