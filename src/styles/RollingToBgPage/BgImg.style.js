import styled from 'styled-components';

export const BgItemWrapper = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  cursor: pointer;

  @media (min-width: 360px) and (max-width: 767px) {
    width: 154px;
    height: 154px;
  }
`;

export const BgImgWrapper = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

export const SelectedLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 44px;
    height: 44px;
  }
`;
