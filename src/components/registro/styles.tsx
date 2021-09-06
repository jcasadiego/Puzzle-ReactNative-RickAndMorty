//Packages
import styled from "styled-components/native";

const InputWrapper = styled.View<{ focused?: string }>`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const InputContainer = styled.View<{ focused?: string }>`
    width: 80%;
    align-items: center;
    justify-content: center;
`;

const InputText = styled.TextInput<{ focused?: string }>`
    width: 80%;
    color:black;
`;

const IconContainer = styled.View<{ focused?: string }>`
    width: 20%;
    align-items: center;
    justify-content: center;
`;

const Label = styled.Text`
    color: darkgrey;
    font-weight: 700;
    font-family: Montserrat-Medium;
    font-size: 14px;
    text-transform: capitalize;
    margin-bottom: 10px;
`;

const TextButton = styled.Text`
    color: white;
    font-weight: 700;
    font-family: Montserrat-Bold;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
`;

const Button = styled.TouchableOpacity`
    width: 70%;
    padding: 8px 14px;
    border-radius: 10px;
    background-color: blue;
`;

const Screem = styled.View`
    flex: 1; 
    alignItems: center; 
    justifyContent: center; 
`;

export {
    InputContainer,
    Label,
    Button,
    TextButton,
    IconContainer,
    InputWrapper,
    InputText,
    Screem
};