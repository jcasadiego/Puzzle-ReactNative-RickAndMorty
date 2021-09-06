//Packages
import {useNavigation} from '@react-navigation/native';
import React from 'react';

//Components
import ButtonRegistroComponent from './buttonRegistro';
import Input from './Input';
import { Screem } from './styles';

export default function RegistroComponents() {
  
  const navigation = useNavigation();

  const handleReset = () => {
    console.log('Aqui estoy')
    navigation.goBack();
  };

  const handleSendCredentiales = () => {
      handleReset();
  };

  return (
    <Screem>
      <Input
        name="First Name"
        placeholder="Write your first name"
      />
      <Input
        name="Last Name"
        placeholder="Write your Last name"
      />
      <Input
        name="Email"
        placeholder="Write your Email"
      />
      <Input
        name="Password"
        placeholder="Write your password"
      />
      <ButtonRegistroComponent tittle="Register" handleReset={handleSendCredentiales} />
    </Screem>
  );
}