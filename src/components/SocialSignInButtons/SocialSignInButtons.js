import React from 'react';
import {Button, Image} from 'react-native-elements';
import facebook from '../../../assets/images/facebook.png';
import google from '../../../assets/images/google.png';
import apple from '../../../assets/images/apple.png';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <Button
        onPress={onSignInFacebook}
        title={'Sign in with Facebook'}
        type="solid"
        containerStyle={{width: '100%', height: 50, marginBottom: 10}}
        buttonStyle={{
          height: 50,
          backgroundColor: '#E7EAF4',
          justifyContent: 'flex-start',
        }}
        titleStyle={{color: '#4765A9'}}
        icon={
          <Image
            source={facebook}
            style={{width: 30, height: 30, marginRight: 10}}
          />
        }
      />

      <Button
        onPress={onSignInGoogle}
        title={'Sign in with Google'}
        type="solid"
        containerStyle={{width: '100%', height: 50, marginBottom: 10}}
        buttonStyle={{
          height: 50,
          backgroundColor: '#FAE9EA',
          justifyContent: 'flex-start',
        }}
        titleStyle={{color: '#DD4D44'}}
        icon={
          <Image
            source={google}
            style={{width: 30, height: 30, marginRight: 10}}
          />
        }
      />

      <Button
        onPress={onSignInApple}
        title={'Sign in with Apple'}
        type="solid"
        containerStyle={{width: '100%', height: 50, marginBottom: 10}}
        buttonStyle={{
          height: 50,
          backgroundColor: '#e3e3e3',
          justifyContent: 'flex-start',
        }}
        titleStyle={{color: '#363636'}}
        icon={
          <Image
            source={apple}
            style={{width: 30, height: 30, marginRight: 10}}
          />
        }
      />
    </>
  );
};

export default SocialSignInButtons;
