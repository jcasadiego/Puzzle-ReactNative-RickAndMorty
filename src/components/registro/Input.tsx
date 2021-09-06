//Packages
import React from 'react';
import {Icon} from '..';

//Styles
import {
  IconContainer,
  InputContainer,
  InputText,
  InputWrapper,
  Label,
} from './styles';

interface IInput {
  name: string;
  placeholder: string;
}

export default function Input({
  name,
  placeholder
}: IInput) {
  return (
    <>
      <Label>{name}</Label>
      <InputWrapper>
        <IconContainer>
          <Icon name={name} size={22} color="black" />
        </IconContainer>
        <InputContainer>
          <InputText
            placeholder={placeholder}
          />
        </InputContainer>
      </InputWrapper>
    </>
  );
}
