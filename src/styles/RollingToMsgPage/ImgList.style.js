import styled from 'styled-components';
import profile from '../../assets/icons/profile.svg';

export const ImgDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

export const ProfileIc = styled.div`
  width: 8rem;
  height: 8rem;
  background-image: ${(props) => `url(${props.$image || profile})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10rem;
`;

export const ImgListDiv = styled.div`
  width: calc(100% - 11.2rem);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > span {
    color: ${({ theme }) => theme.subText};
    font-size: var(--font16);
    font-weight: var(--regular);
    line-height: 1.625;
    letter-spacing: -0.016rem;
  }
`;

export const ListContentDiv = styled.div`
  min-height: 5.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  @media (max-width: 360px) {
    width: 20.8rem;
    height: 8.4rem;
    flex-wrap: wrap;
    gap: 0.4rem 0.2rem;
  }
`;

export const ImageDiv = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  background-image: ${(props) => `url(${props.data || profile})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10rem;
  border-radius: 100px;
  border: 0.1rem solid var(--gray200);
  cursor: pointer;

  @media (max-width: 360px) {
    width: 4rem;
    height: 4rem;
  }
`;
