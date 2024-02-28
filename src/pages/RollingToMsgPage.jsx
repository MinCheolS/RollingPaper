import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import profile from '../assets/icons/profile.svg';
import TextEditor from '../components/RollingToMsgPage/TextEditor';
import Select from '../components/RollingToMsgPage/Select';
import {
  fontsList,
  relationshList,
} from '../components/RollingToMsgPage/SelectList';
import getProfileImg from '../apis/ProfileImgApi';

function RollingToMsgPage() {
  const [isOpenRelationsh, setIsOpenRelationsh] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [profileImg, setProfileImg] = useState([]);

  const loadProfileImgHandle = async () => {
    const { imageUrls } = await getProfileImg();
    setProfileImg([...imageUrls]);
  };
  console.log(profileImg);

  useEffect(() => {
    loadProfileImgHandle();
  }, []);

  return (
    <MsgPageContainer>
      <MsgPageForm>
        <InputNameContent>
          <label htmlFor="InputFrom">From.</label>
          <input
            id="InputFrom"
            type="text"
            placeholder="이름을 입력해 주세요."
          />
        </InputNameContent>
        <ProfileImgContent>
          <span>프로필 이미지</span>
          <ImgDiv>
            <ProfileIc />
            <ImgListDiv>
              <span>프로필 이미지를 선택해주세요!</span>
              <ListContentDiv>
                {profileImg.map((item) => (
                  <div key={item} data={item} />
                ))}
              </ListContentDiv>
            </ImgListDiv>
          </ImgDiv>
        </ProfileImgContent>
        <RelationshipContent>
          <span>상대와의 관계</span>
          <Select
            SelectList={relationshList}
            isOpen={isOpenRelationsh}
            setIsOpen={setIsOpenRelationsh}
          />
        </RelationshipContent>
        <WriteContent>
          <span>내용을 입력해 주세요</span>
          <div>
            <TextEditor />
          </div>
        </WriteContent>
        <FontsContent $isOpen={(isOpenRelationsh, isOpenFont)}>
          <span>폰트 선택</span>
          <Select
            SelectList={fontsList}
            isOpen={isOpenFont}
            setIsOpen={setIsOpenFont}
          />
        </FontsContent>
      </MsgPageForm>
      <button type="submit">생성하기</button>
    </MsgPageContainer>
  );
}

export default RollingToMsgPage;

const MsgPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.2rem;

  @media (max-width: 768px) {
    gap: 5.2rem;
  }

  @media (max-width: 360px) {
    gap: 18.2rem;
  }

  & > button {
    width: 72rem;
    height: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.4rem 2.4rem;
    border-radius: 1.2rem;
    background-color: var(--purple600);
    color: var(--white);
    font-size: var(--font18);
    font-weight: var(--bold);
    line-height: 1.55556;
    letter-spacing: -0.018rem;

    @media (max-width: 360px) {
      width: 32rem;
    }
  }
`;

const MsgPageForm = styled.form`
  width: 72rem;
  display: flex;
  flex-direction: column;
  padding-top: 4.7rem;
  gap: 5rem;

  @media (max-width: 768px) {
    padding-top: 4.9rem;
  }

  @media (max-width: 360px) {
    width: 32rem;
    padding-top: 5rem;
  }
`;

const InputNameContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > label {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }

  & > input {
    width: 72rem;
    display: flex;
    align-items: center;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray300);
    background-color: var(--white);
    color: var(--gray500, #555555);
    font-size: var(--font16);
    font-weight: var(--regular);
    line-height: 1.625;
    letter-spacing: -0.016rem;

    @media (max-width: 360px) {
      width: 32rem;
    }
  }
`;

const ProfileImgContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > span {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

const ProfileIc = styled.div`
  width: 8rem;
  height: 8rem;
  background-image: url(${profile});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ImgListDiv = styled.div`
  width: calc(100% - 11.2rem);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > span {
    color: var(--gray500);
    font-size: var(--font16);
    font-weight: var(--regular);
    line-height: 1.625;
    letter-spacing: -0.016rem;
  }
`;

const ListContentDiv = styled.div`
  width: 60.5rem;
  height: 5.6rem;
  display: flex;
  gap: 0.4rem;

  @media (max-width: 360px) {
    width: 20.8rem;
    height: 8.4rem;
    flex-wrap: wrap;
    gap: 0.4rem 0.2rem;
  }

  & > div {
    width: 5.6rem;
    height: 5.6rem;
    background-image: url(${profile});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 360px) {
      width: 4rem;
      height: 4rem;
    }
  }
`;

const RelationshipContent = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.2rem;

  & > span {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }
`;

const WriteContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > span {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }

  & > div {
    width: 72rem;
    height: 26rem;

    @media (max-width: 360px) {
      width: 32rem;
    }
  }
`;

const FontsContent = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '25rem' : '')};
  gap: 1.2rem;

  @media (max-width: 360px) {
    padding-bottom: ${({ $isOpen }) => ($isOpen ? '7rem' : '0')};
  }

  & > span {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }
`;
