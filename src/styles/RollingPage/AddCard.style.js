import styled from 'styled-components';

export const AddCardDiv = styled.div`
  width: 100%;
  min-height: 280px;
  height: 100%;
  padding: 0px 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.btnBgColor};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusFrame = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-color: var(--gray500);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  &:hover {
    transform: scale(1.1);
  }
`;
