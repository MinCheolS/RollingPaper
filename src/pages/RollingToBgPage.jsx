import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputComponent from '../components/InputComponent';
import Toggle from '../components/Toggle';
import getBgImg from '../apis/BgImg';
import BgList from '../components/BgList';

function RollingToBgPage() {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [toggleValue, setToggleValue] = useState('color');
  const [loadingError, setLoadingError] = useState(null);
  const [items, setItems] = useState([]);
  const color = ['#ffe2ad', '#ecd9ff', '#b1e4ff', '#d0f5c3'];
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [selectedImg, setSelectedImg] = useState('');
  console.log('임시로 불러온 선택된 컬러', selectedColor);
  console.log('임시로 불러온 선택된 이미지', selectedImg);

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

  return (
    <Wrapper>
      <Header>RollingToBgPage</Header>
      <FormWrapper>
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
          />
        )}
        {loadingError && <div>에러가 발생했습니다.</div>}
        <SubmitButton type="submit">생성하기</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
}

export default RollingToBgPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Header = styled.h1`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 65px;
  justify-content: center;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 786px;
  background-color: aliceblue;
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
`;
