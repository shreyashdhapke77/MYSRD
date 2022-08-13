import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import {ToastMessage} from '../../helpers/ToastMessage.js';
import {Colors} from '../../styles/index.js';

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

class ForgotPasswordScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      isValid: false,
      isValidUserName: true,
    };
  }

  onSendPressed = async data => {
    this.validData();
    if (this.state.isValid) {
      this.props.navigation.navigate('NewPassword');
    }
  };

  onSignInPress = () => {
    this.props.navigation.navigate('SignIn');
  };

  validData = () => {
    if (this.state.userName) {
      this.setState({isValid: true, isValidUserName: true});
      return ToastMessage.showSuccessMessage(
        'Success',
        'We have sent an otp to your email',
      );
    } else {
      this.setState({
        isValid: false,
        isValidUserName: false,
      });
      return ToastMessage.showErrorMessage(
        'Error',
        'Please enter valid username',
      );
    }
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>

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

          <CustomButton text="Send" onPress={this.onSendPressed} />

          <CustomButton
            text="Back to Sign in"
            onPress={this.onSignInPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    );
  }
}

export default ForgotPasswordScreen;
