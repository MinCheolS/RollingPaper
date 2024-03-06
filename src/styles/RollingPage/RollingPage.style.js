import styled from 'styled-components';
import { getBgColor } from '../../utils/BgItem';

export const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px;
  overflow: auto;
  background-image: ${({ $bgImg, theme }) =>
    theme.mode === 'light' ? `url(${$bgImg})` : theme.bgColor};
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ $bgColor, theme }) =>
    theme.mode === 'light' ? getBgColor($bgColor) : theme.bgColor};
  & > .Div {
    padding-top: 114px;
    width: 1200px;
    margin: auto;

    @media (max-width: 1248px) {
      width: auto;
      padding: 114px 24px 0px;
    }

    @media (max-width: 768px) {
      padding: 93px 20px 0px;
    }
  }
`;

export const CardsListsDiv = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  justify-content: center;
  align-items: center;
  gap: 28px 24px;
  margin: auto;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    width: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 58px) {
    gap: 16px;
  }

  @media (max-width: 360px) {
    width: auto;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 16px;
  }
`;

export const EditBtn = styled.button`
  display: ${({ $isEditMode }) => (!$isEditMode ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 8px 17px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--gray300);
  margin-bottom: 11px;

  color: var(--gray600);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.16px;

  &:hover {
    transform: scale(1.05); /* Scale the button slightly on hover */
  }

  @media (max-width: 768px) {
    width: auto;
    padding: 8px 0px;
    position: fixed;
    bottom: 24px;
    left: 24px;
    right: 24px;
    margin: 0;
    z-index: 999;
  }

  @media (max-width: 360px) {
    width: auto;
    padding: 8px 0px;
    position: fixed;
    bottom: 24px;
    left: 20px;
    right: 20px;
    margin: 0;
    z-index: 999;
  }
`;

export const CompleteBtn = styled(EditBtn)`
  display: ${({ $isEditMode }) => ($isEditMode ? 'block' : 'none')};
  background: var(--purple600);
  color: #fff;
`;
