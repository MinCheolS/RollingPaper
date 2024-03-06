import styled from 'styled-components';

export const MsgPageContainerDiv = styled.div`
  max-width: 192rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormContentDiv = styled.div`
  padding: 0 2.4rem;
  background-color: ${({ theme }) => theme.bgColor};

  @media (max-width: 360px) {
    padding: 0 2rem;
  }
`;

export const MsgPageForm = styled.form`
  max-width: 72rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4.7rem 0 6rem;
  margin: 0 auto;
  gap: 5rem;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({ disabled }) =>
    disabled ? 'var(--gray300)' : 'var(--purple600)'};
  color: var(--white);
  font-size: var(--font18);
  font-weight: var(--bold);
  line-height: 1.55556;
  letter-spacing: -0.018rem;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:focus {
    background-color: ${({ disabled }) =>
      disabled ? 'var(--gray300)' : 'var(--purple800)'};
  }

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? 'var(--gray300)' : 'var(--purple700)'};
  }

  @media (max-width: 360px) {
    width: 32rem;
  }
`;
