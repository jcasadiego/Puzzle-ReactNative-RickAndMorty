//Packages
import styled from "styled-components/native";

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
    Button,
    TextButton,
    Screem
};