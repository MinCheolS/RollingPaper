import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfileImg, getRecipients, postFormData } from '../apis/api';
import InputName from '../components/RollingToMsgPage/InputName';
import ProfileImg from '../components/RollingToMsgPage/ProfileImg';
import Relationship from '../components/RollingToMsgPage/Relationship';
import Fonts from '../components/RollingToMsgPage/Fonts';
import Text from '../components/RollingToMsgPage/Text';
import {
  MsgPageContainerDiv,
  MsgPageForm,
  SubmitBtn,
} from '../styles/RollingToMsgPage.style';

function RollingToMsgPage() {
  const [isOpenRelationship, setIsOpenRelationship] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [profileImg, setProfileImg] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [image, setImage] = useState('');
  const [relationshipValue, setRelationshipValue] = useState('지인');
  const [quillValue, setQuillValue] = useState('');
  const [fontpValue, setFontValue] = useState('Noto Sans');
  const navigate = useNavigate();

  const loadProfileImgHandle = async () => {
    const { imageUrls } = await getProfileImg();
    setProfileImg([...imageUrls]);
  };

  const loadRecipients = async () => {
    const { results } = await getRecipients();
    setId(results[0].id);
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

  useEffect(() => {
    loadProfileImgHandle();
    loadRecipients();
  }, []);
  return (
    <MsgPageContainerDiv>
      <MsgPageForm onSubmit={onSubmitHandle}>
        <InputName
          setName={setName}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
        />
        <ProfileImg profileImg={profileImg} image={image} setImage={setImage} />
        <Relationship
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
    </MsgPageContainerDiv>
  );
}

export default RollingToMsgPage;
