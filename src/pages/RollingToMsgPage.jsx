import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProfileImg, postFormData } from '../apis/api';
import InputName from '../components/RollingToMsgPage/InputName';
import ProfileImg from '../components/RollingToMsgPage/ProfileImg';
import Relationship from '../components/RollingToMsgPage/Relationship';
import Fonts from '../components/RollingToMsgPage/Fonts';
import Text from '../components/RollingToMsgPage/Text';
import {
  FormContentDiv,
  MsgPageContainerDiv,
  MsgPageForm,
  SubmitBtn,
} from '../styles/RollingToMsgPage/RollingToMsgPage.style';
import useOutsideClose from '../hooks/useOutsideClose';
import Header from '../components/Common/Header/Header';

function RollingToMsgPage() {
  const [isOpenRelationship, setIsOpenRelationship] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [profileImg, setProfileImg] = useState([]);
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [image, setImage] = useState('');
  const [relationshipValue, setRelationshipValue] = useState('지인');
  const [quillValue, setQuillValue] = useState('');
  const [fontpValue, setFontValue] = useState('Noto Sans');
  const navigate = useNavigate();
  const { id } = useParams();
  const relationshipRef = useRef(null);
  const fontRef = useRef(null);

  const loadProfileImgHandle = async () => {
    const { imageUrls } = await getProfileImg();
    setProfileImg([...imageUrls]);
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const formData = {
      team: '4-3',
      recipientId: id,
      sender: name,
      profileImageURL: image,
      relationship: relationshipValue,
      content: quillValue,
      font: fontpValue,
    };

    const response = await postFormData(formData, id);
    navigate(`/post/${id}/`);
    return response;
  };

  const onRelationshipValueHandle = (value) => {
    setRelationshipValue(value);
  };

  const onQuillValueChangeHandle = (value) => {
    setQuillValue(value);
  };

  const onFontValueHandle = (value) => {
    setFontValue(value);
  };

  useOutsideClose(relationshipRef, setIsOpenRelationship);
  useOutsideClose(fontRef, setIsOpenFont);

  useEffect(() => {
    loadProfileImgHandle();
  }, []);
  return (
    <MsgPageContainerDiv>
      <Header />
      <FormContentDiv>
        <MsgPageForm onSubmit={onSubmitHandle}>
          <InputName
            setName={setName}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
          />
          <ProfileImg
            profileImg={profileImg}
            image={image}
            setImage={setImage}
          />
          <Relationship
            ref={relationshipRef}
            isOpenRelationship={isOpenRelationship}
            setIsOpenRelationship={setIsOpenRelationship}
            relationshipValue={relationshipValue}
            onRelationshipValueHandle={onRelationshipValueHandle}
          />
          <Text
            quillValue={quillValue}
            onQuillValueChangeHandle={onQuillValueChangeHandle}
          />
          <Fonts
            ref={fontRef}
            isOpenFont={isOpenFont}
            setIsOpenFont={setIsOpenFont}
            isOpenRelationship={isOpenRelationship}
            fontpValue={fontpValue}
            onFontValueHandle={onFontValueHandle}
          />
          <SubmitBtn type="submit" disabled={!name || !quillValue}>
            생성하기
          </SubmitBtn>
        </MsgPageForm>
      </FormContentDiv>
    </MsgPageContainerDiv>
  );
}

export default RollingToMsgPage;
