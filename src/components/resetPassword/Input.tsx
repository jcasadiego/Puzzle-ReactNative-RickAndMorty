//Packages
import React, { Dispatch, SetStateAction } from "react";
import { Icon } from "..";

//Styles
import { ErrorMesaage, IconContainer, InputContainer, InputText, InputWrapper, Label } from "./styles";

interface IInput {
    name: string,
    value: string,
    onChangeText: Dispatch<SetStateAction<string>>,
    placeholder: string,
    errorMessage: string,
    type: string
}

export default function Input({ name, value, onChangeText, placeholder, errorMessage, type }: IInput) {

    return (
        <>
            <Label>
                {name}
            </Label>
            <InputWrapper>
                <IconContainer>
                    <Icon
                        name={name}
                        size={22}
                        color="black"
                    />
                </IconContainer>
                <InputContainer>
                    <InputText
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        keyboardType={type === 'mail' ? 'email-address' : 'default'}
                        secureTextEntry={type == 'password'}
                    />
                </InputContainer>
            </InputWrapper>
            <ErrorMesaage>
                {errorMessage ? errorMessage : ' '}
            </ErrorMesaage>
        </>
    );
};