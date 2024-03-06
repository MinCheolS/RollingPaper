import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
  gap: 12px;
  label {
    color: ${({ theme }) => theme.text};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.24px;
  }
`;

export const Input = styled.input`
  width: 100%;

  padding: 12px 10px;
  border-radius: 8px;
  font-size: var(--font16, 1.6rem);
  line-height: 2.4rem;
  letter-spacing: -0.016rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.inputBgColor};
  color: ${({ theme }) => theme.text};
  z-index: 1;
  border: ${(props) =>
    props.$isTouched && !props.$isValid
      ? '1px solid #dc3a3a'
      : '1px solid #ccc'};
  &:hover {
    border: 1px solid var(--purple600, #9935ff);
  }
  &:focus {
    border: 1px solid var(--purple600, #9935ff);
  }
`;

export const WarningText = styled.div`
  color: #dc3a3a;
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
`;
