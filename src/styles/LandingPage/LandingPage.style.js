import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media all and (min-width: 768px) and (max-width: 1248px) {
    margin: 49px 0;
    padding: 0 24px;
    max-width: none;
  }
  @media all and (max-width: 768px) {
    padding: 24px 20px;
    gap: 24px;
    max-width: none;
  }
`;
