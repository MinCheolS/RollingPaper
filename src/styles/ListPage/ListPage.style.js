import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  padding: 0 24px;
  @media all and (max-width: 1248px) {
    overflow: hidden;
  }
`;
