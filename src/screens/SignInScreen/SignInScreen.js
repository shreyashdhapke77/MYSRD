import React from 'react';
import {View, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Logo from '../../../assets/images/my_img.png';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons.js';
import {ToastMessage} from '../../helpers/ToastMessage';
import {Colors} from '../../styles';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

class SignInScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      isLoading: false,
      isEmailValid: true,
      isPasswordValid: true,
      userToken: '',
      isValid: false,
    };
  }

  componentDidMount() {
    this.getAccessToken();
  }

  getAccessToken = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=28cdf46619e7d18e948d072ccb6f0fbb`,
        requestOptions,
      );
      const result = await response.json();
      if (result.success) {
        this.setState({userToken: result.request_token});
      } else {
        ToastMessage.showErrorMessage(
          'Timeout Please check your internet connection',
        );
      }
    } catch (error) {
      console.log('error  == ', error);
    }
  };

  generateSession = async accessToken => {
    let payload = {};
    if (accessToken) {
      payload = {
        username: this.state.userName,
        password: this.state.password,
        request_token: accessToken,
      };
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=28cdf46619e7d18e948d072ccb6f0fbb`,
        requestOptions,
      );
      const result = await response.json();
      console.log('Result =====> ', result);
      if (result.success) {
        this.setState({isValid: true});
      } else {
        this.setState({isEmailValid: false, isPasswordValid: false});
        ToastMessage.showErrorMessage('Error', result.status_message);
      }
    } catch (error) {
      console.log('error  == ', error);
    }
  };

  onSignInPressed = async () => {
    this.validData();
    if (this.validData()) {
      await this.generateSession(this.state.userToken);
      if (this.state.isValid) {
        console.log('IS Valid =====> ', this.state.isValid);
        ToastMessage.showSuccessMessage('Successfully signed in');
        this.props.navigation.navigate('Home');
        this.setState({isValid: false});
      }
    }
  };

  onForgotPasswordPressed = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  onSignUpPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  validData = () => {
    if (this.state.userName && this.state.password) {
      this.setState({isEmailValid: true, isPasswordValid: true});
      return true;
    } else {
      if (!this.state.userName && !this.state.password) {
        this.setState({
          isEmailValid: false,
          isPasswordValid: false,
        });
        ToastMessage.showErrorMessage(
          'Error',
          'Please enter username and password',
        );
      } else {
        if (!this.state.userName || this.state.userName.length === 0) {
          this.setState({isEmailValid: false, isPasswordValid: true});
          ToastMessage.showErrorMessage('Error', 'Please enter username');
        } else if (!this.state.password || this.state.password.length === 0) {
          this.setState({isPasswordValid: false, isEmailValid: true});
          ToastMessage.showErrorMessage('Error', 'Please enter password');
        }
      }
    }
    return false;
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"
          />

          <CustomInput
            bColor={!this.state.isEmailValid ? Colors.PRIMARY : null}
            multiline={false}
            value={this.state.userName ? this.state.userName : ''}
            onChangeText={text => {
              this.setState({userName: text});
            }}
            editable={true}
            placeholder={'Username'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />
          <CustomInput
            bColor={!this.state.isPasswordValid ? Colors.PRIMARY : null}
            multiline={false}
            value={this.state.password}
            onChangeText={text => {
              this.setState({password: text});
            }}
            editable={true}
            placeholder={'Password'}
            secureTextEntry={true}
            onSubmitEditing={() => {}}
          />

          <CustomButton onPress={this.onSignInPressed} text="Sign In" />

          <CustomButton
            text="Forgot password?"
            onPress={this.onForgotPasswordPressed}
            type="TERTIARY"
          />

          <SocialSignInButtons />

          <CustomButton
            text="Don't have an account? Create one"
            onPress={this.onSignUpPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    );
  }
}

export default SignInScreen;
