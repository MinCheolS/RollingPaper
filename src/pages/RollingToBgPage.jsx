import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header/Header';
import InputComponent from '../components/RollingBgPage/InputComponent';
import Toggle from '../components/RollingBgPage/Toggle';
import getBgImg from '../apis/BgImg';
import BgList from '../components/RollingBgPage/BgList';

function RollingToBgPage() {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [toggleValue, setToggleValue] = useState('color');
  const [loadingError, setLoadingError] = useState(null);
  const [items, setItems] = useState([]);
  const color = ['beige', 'purple', 'blue', 'green'];
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [selectedImg, setSelectedImg] = useState(null);

  const navigate = useNavigate();

  const onSelectColorHandle = (value) => {
    setSelectedColor(value);
  };

  const onSelectImgHandle = (value) => {
    setSelectedImg(value);
  };

  const onLoadHandle = async () => {
    let result;
    try {
      setLoadingError(null);
      result = await getBgImg();
    } catch (error) {
      setLoadingError(error);
      return;
    }
    const { imageUrls } = result;
    setItems(imageUrls);
  };

  useEffect(() => {
    onLoadHandle();
  }, []);

  const onToggleHandle = (value) => {
    setToggleValue(value);
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    const data = {
      team: '4-3',
      name,
      backgroundColor: selectedColor,
      backgroundImageURL: selectedImg,
    };

    try {
      const response = await fetch(
        'https://rolling-api.vercel.app/4-3/recipients/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      if (response.ok) {
        const result = await response.json();
        navigate(`/post/${result.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderDisplay>
        <Header />
      </HeaderDisplay>
      <Wrapper>
        <FormWrapper onSubmit={onSubmitHandle}>
          <InputComponent
            value={name}
            setValue={setName}
            touched={nameTouched}
            setTouched={setNameTouched}
            placeholder="받는 사람 이름을 입력해 주세요"
            id="To"
          />
          <Toggle onToggle={onToggleHandle} toggleValue={toggleValue} />
          {toggleValue === 'color' ? (
            <BgList
              images={color}
              onSelectColor={onSelectColorHandle}
              onSelectImg={onSelectImgHandle}
            />
          ) : (
            <BgList
              images={items}
              onSelectColor={onSelectColorHandle}
              onSelectImg={onSelectImgHandle}
              selectedColor={selectedColor}
            />
          )}
          {loadingError && <div>에러가 발생했습니다.</div>}
          <SubmitButton type="submit">생성하기</SubmitButton>
        </FormWrapper>
      </Wrapper>
    </>
  );
}

export default RollingToBgPage;

const HeaderDisplay = styled.div`
  @media (min-width: 360px) and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-top: 57px;
  @media (min-width: 360px) and (max-width: 767px) {
    margin-top: 50px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 720px;

  @media (min-width: 360px) and (max-width: 767px) {
    width: 320px;
  }
`;

const SubmitButton = styled.button`
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
`;
