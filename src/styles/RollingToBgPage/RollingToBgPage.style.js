import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding-top: 57px;
  min-height: calc(100vh - 65px);
  @media (min-width: 360px) and (max-width: 767px) {
    padding-top: 50px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 720px;

  @media (min-width: 360px) and (max-width: 767px) {
    width: 320px;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  background-color: #9935ff;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  margin-top: 24px;
  margin-bottom: 24px;
  &:hover {
    background: var(--purple700, #861dee);
  }
  &:active {
    background: var(--purple800, #6e0ad1);
  }
`;
