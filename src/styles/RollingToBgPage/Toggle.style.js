import styled from 'styled-components';

export const TotalWrapper = styled.div`
  width: 100%;
  margin-bottom: 45px;
  @media (min-width: 360px) and (max-width: 767px) {
    margin-bottom: 28px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-bottom: 24px;
  font-family: Pretendard;
`;

export const SelectTxt = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 8px;
  @media (min-width: 360px) and (max-width: 768px) {
    margin-bottom: 4px;
  }
`;

export const SubTxt = styled.p`
  color: ${({ theme }) => theme.subText};
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  width: 244px;
  height: 40px;
  border-radius: 6px;
`;

export const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 10px;
  font-family: Pretendard;
  font-weight: ${({ selected }) => (selected ? '700' : '400')};
  font-size: 16px;
  border-radius: 6px;

  border: 2px solid
    ${({ selected, theme }) => (selected ? '#9935ff' : theme.btnBorderColor)};
  color: ${({ selected, theme }) =>
    selected ? theme.buttonSelectText : theme.text};
  background-color: ${({ selected, theme }) =>
    selected ? theme.buttonSelectColor : theme.btnBgColor};
  cursor: pointer;
`;
