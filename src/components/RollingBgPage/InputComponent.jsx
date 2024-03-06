import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputWrapper,
  WarningText,
} from '../../styles/RollingToBgPage/InputComponent.style';

function InputComponent({
  value,
  setValue,
  touched,
  setTouched,
  placeholder,
  id,
}) {
  InputComponent.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    setTouched: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  const isValid = value.length > 0;

  const onBlurHandle = () => {
    if (!value) {
      setTouched(true);
    }
  };

  const onFocusHandle = () => {
    setTouched(false);
  };

  const onChangeHandle = (e) => {
    const { value: newValue } = e.target;
    setValue(newValue);
  };

  return (
    <InputWrapper>
      <label htmlFor={id}>{id}.</label>
      <Input
        id={id}
        type="text"
        placeholder={placeholder}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
        onFocus={onFocusHandle}
        $isTouched={touched}
        $isValid={isValid}
      />
      <WarningText $isVisible={touched && !isValid}>
        값을 입력해주세요
      </WarningText>
    </InputWrapper>
  );
}

export default InputComponent;
