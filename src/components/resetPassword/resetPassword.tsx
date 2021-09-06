//Packages
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

//Components
import ButtonResetComponent from './buttonReset';
import Input from './Input';
import {Screem} from './styles';

export default function ResetPasswordComponents() {
  
  const navigation = useNavigation();

  const handleReset = () => {
    navigation.goBack();
  };

  const [email, setEmail] = useState(' ');
  const [password, setPass] = useState(' ');
  const [error, setError] = useState(' ');
  const [errorPass, setErrorPass] = useState(' ');

  const handleSendCredentiales = () => {
    const re = /^(.+\@.+\..+)$/;
    const trueMail = re.test(String(email).toLowerCase());

    trueMail ? setError(' ') : setError('Invalid Email');

    password.length > 8
      ? setErrorPass(' ')
      : setErrorPass('must be more than 8 characters');

    if (password.length > 8 && trueMail) {
      handleReset();
    }
  };

  return (
    <Screem>
      <Input
        name="email"
        value={email}
        onChangeText={setEmail}
        placeholder="Write your email"
        errorMessage={error}
        type="mail"
      />
      <Input
        name="New Password"
        value={password}
        onChangeText={setPass}
        placeholder="Write your password"
        errorMessage={errorPass}
        type="password"
      />
      <ButtonResetComponent
        tittle="Reset Password"
        handleReset={handleSendCredentiales}
      />
    </Screem>
  );
}
