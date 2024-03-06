import React from 'react';
import { PropTypes } from 'prop-types';
import { styled } from 'styled-components';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

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

const AddCardDiv = styled.div`
  width: 100%;
  min-height: 280px;
  height: 100%;
  padding: 0px 24px;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlusFrame = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-color: var(--gray500);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export default AddCard;
