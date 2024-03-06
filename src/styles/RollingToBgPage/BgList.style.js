import styled from 'styled-components';

export const BgListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 69px;
  @media (min-width: 360px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 58px;
  }
`;

export const etc = styled.div``;
