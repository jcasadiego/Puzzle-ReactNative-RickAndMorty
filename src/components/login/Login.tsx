//Packages
import React, {useContext, useState} from 'react';
import {StatusBar} from 'react-native';
import {Link} from '@react-navigation/native';

//components
import {Auth} from '../../provider/AuthProvider';
import ButtonComponent from './Button';
import Input from './Input';

//styles
import {Label, LabelRegister, ScreemButton, ScreenImage} from './styles';

export default function LoginComponents({navigation}: any) {

  console.log('login')

  const {handleLogin} = useContext(Auth);

  const [email, setEmail] = useState(' ');
  const [password, setPass] = useState(' ');
  const [active, setActive] = useState(false);
  const [error, setError] = useState(' ');
  const [errorPass, setErrorPass] = useState(' ');

  const handleKeyBoard = () => {
    setActive(!active);
  };

  const handleSendCredentiales = () => {
    const re = /^(.+\@.+\..+)$/;
    const trueMail = re.test(String(email).toLowerCase());

    trueMail ? setError(' ') : setError('Invalid Email');

    password.length > 8
      ? setErrorPass(' ')
      : setErrorPass('must be more than 8 characters');

    if (password.length > 8 && trueMail) {
      handleLogin ? handleLogin() : null;
    }
  };

  return (
    <ScreenImage source={require('../../../assets/Image/RickandMorty.jpeg')}>
      <StatusBar barStyle="light-content" />
      <ScreemButton height={active ? '100%' : '70%'}>
        <Input
          name="email"
          value={email}
          onChangeText={setEmail}
          onFocus={handleKeyBoard}
          onBlur={handleKeyBoard}
          placeholder="Write your email"
          errorMessage={error}
          type="mail"
        />
        <Input
          name="password"
          value={password}
          onChangeText={setPass}
          onFocus={handleKeyBoard}
          onBlur={handleKeyBoard}
          placeholder="Write your password"
          errorMessage={errorPass}
          type="password"
        />
        <LabelRegister>
          <Link to={{screen: 'ResetPassword'}}>Reset Password</Link>
          {'                                          '}
          <Link to={{screen: 'Registro'}}>Register</Link>
        </LabelRegister>
        <ButtonComponent tittle="Login" onPress={handleSendCredentiales} />
      </ScreemButton>
    </ScreenImage>
  );
};
