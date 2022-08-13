import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons.js';
import {ToastMessage} from '../../helpers/ToastMessage.js';
import {Colors} from '../../styles/index.js';

// const EMAIL_REGEX =
// /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      isValid: false,
      isValidName: true,
      isValidUserName: true,
      isValidEmail: true,
      isValidPassword: true,
      isValidConfirmPassword: true,
    };
  }
  onRegisterPressed = () => {
    this.validData();
    if (this.state.isValid) {
      this.props.navigation.navigate('ConfirmEmail');
    }
  };

  onSignInPress = () => {
    this.props.navigation.navigate('SignIn');
  };

  onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  validData = () => {
    if (
      this.state.name &&
      this.state.userName &&
      this.state.email &&
      this.state.password &&
      this.state.confirmPassword
    ) {
      this.setState({
        isValidName: true,
        isValidUserName: true,
        isValidEmail: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
        isValid: true,
      });
      return ToastMessage.showSuccessMessage(
        'Success',
        'We have sent an otp on you email',
      );
    } else {
      if (
        !this.state.name &&
        !this.state.userName &&
        !this.state.email &&
        !this.state.password &&
        !this.state.confirmPassword
      ) {
        this.setState({
          isValidName: false,
          isValidUserName: false,
          isValidEmail: false,
          isValidPassword: false,
          isValidConfirmPassword: false,
          isValid: false,
        });
        return ToastMessage.showErrorMessage(
          'Error',
          'Please fill all mandatory details',
        );
      } else {
        if (!this.state.name || this.state.name.length === 0) {
          this.setState({isValidName: false, isValid: false});
          return ToastMessage.showErrorMessage(
            'Error',
            'Please enter your name',
          );
        } else if (!this.state.userName || this.state.userName.length === 0) {
          this.setState({isValidUserName: false, isValid: false});
          return ToastMessage.showErrorMessage(
            'Error',
            'Please enter username',
          );
        } else if (!this.state.email || this.state.email.length === 0) {
          this.setState({isValidEmail: false, isValid: false});
          return ToastMessage.showErrorMessage(
            'Error',
            'Please enter your email',
          );
        } else if (!this.state.password || this.state.password.length === 0) {
          this.setState({isValidPassword: false, isValid: false});
          return ToastMessage.showErrorMessage(
            'Error',
            'Please enter your password',
          );
        } else if (
          !this.state.confirmPassword ||
          this.state.confirmPassword.length === 0
        ) {
          this.setState({isValidConfirmPassword: false, isValid: false});
          return ToastMessage.showErrorMessage(
            'Error',
            'Confirm your password',
          );
        }
      }
    }
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Create an account</Text>

          <CustomInput
            bColor={!this.state.isValidName ? Colors.PRIMARY : null}
            multiline={false}
            value={this.state.name ? this.state.name : ''}
            onChangeText={text => {
              this.setState({name: text});
            }}
            editable={true}
            placeholder={'Name'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />

          <CustomInput
            bColor={!this.state.isValidUserName ? Colors.PRIMARY : null}
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
            bColor={!this.state.isValidEmail ? Colors.PRIMARY : null}
            multiline={false}
            value={this.state.email ? this.state.email : ''}
            onChangeText={text => {
              this.setState({email: text});
            }}
            editable={true}
            placeholder={'Email'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />
          <CustomInput
            bColor={!this.state.isValidPassword ? Colors.PRIMARY : null}
            multiline={false}
            value={this.state.password ? this.state.password : ''}
            onChangeText={text => {
              this.setState({password: text});
            }}
            editable={true}
            placeholder={'Password'}
            secureTextEntry={true}
            onSubmitEditing={() => {}}
          />
          <CustomInput
            bColor={!this.state.isValidConfirmPassword ? Colors.PRIMARY : null}
            multiline={false}
            value={this.state.confirmPassword ? this.state.confirmPassword : ''}
            onChangeText={text => {
              this.setState({confirmPassword: text});
            }}
            editable={true}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            onSubmitEditing={() => {}}
          />
          <CustomInput
            multiline={false}
            value={this.state.phoneNumber ? this.state.phoneNumber : ''}
            onChangeText={text => {
              this.setState({phoneNumber: text});
            }}
            editable={true}
            placeholder={'Phone Number'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />

          <CustomButton text="Register" onPress={this.onRegisterPressed} />

          <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text style={styles.link} onPress={this.onTermsOfUsePressed}>
              Terms of Use
            </Text>{' '}
            and{' '}
            <Text style={styles.link} onPress={this.onPrivacyPressed}>
              Privacy Policy
            </Text>
          </Text>

          <SocialSignInButtons />

          <CustomButton
            text="Have an account? Sign in"
            onPress={this.onSignInPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    );
  }
}

export default SignUpScreen;
