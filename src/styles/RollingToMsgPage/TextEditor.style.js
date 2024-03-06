import styled from 'styled-components';
import ReactQuill from 'react-quill';

export const StyledQuillEditor = styled(ReactQuill)`
  height: 21.8rem;
  border-radius: 0.8rem;

  @media (max-width: 360px) {
    width: 32rem;
    height: 19.4rem;
  }

  .ql-toolbar {
    border: 0.2rem solid var(--gray300);
    border-radius: 0.8rem 0.8rem 0 0;
    background-color: var(--gray200);
  }

  .ql-container {
    border: 0.2rem solid var(--gray300);
    border-radius: 0 0 0.8rem 0.8rem;
    background-color: var(--white, #fff);
  }
`;

export const etc = styled.div``;
