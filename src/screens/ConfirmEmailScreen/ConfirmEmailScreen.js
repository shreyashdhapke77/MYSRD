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
});

class ConfirmEmailScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      code: '',
      isValid: false,
      isValidCode: true,
    };
  }

  onConfirmPressed = () => {
    this.validData();
    if (this.state.isValid) {
      this.props.navigation.navigate('SignIn');
    }
  };

  onSignInPress = () => {
    this.props.navigation.navigate('SignIn');
  };

  onResendPress = async () => {
    ToastMessage.showSuccessMessage('Success', 'Code was resent to your email');
  };

  validData = () => {
    if (this.state.code) {
      this.setState({isValid: true, isValidCode: true});
      return ToastMessage.showSuccessMessage(
        'Success',
        'Account was created successfully, Please sign in to get started',
      );
    } else {
      this.setState({
        isValid: false,
        isValidCode: false,
      });
      return ToastMessage.showErrorMessage(
        'Error',
        'Please enter confirmation code',
      );
    }
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Confirm your email</Text>

          <CustomInput
            multiline={false}
            value={this.state.userName ? this.state.userName : ''}
            onChangeText={text => {
              this.setState({userName: text});
            }}
            editable={false}
            placeholder={'Username'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />

          <CustomInput
            bColor={!this.state.isValidCode ? Colors.PRIMARY : null}
            multiline={false}
            value={this.state.code ? this.state.code : ''}
            onChangeText={text => {
              this.setState({code: text});
            }}
            editable={true}
            placeholder={'Enter Your Confirmation Code'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />

          <CustomButton text="Confirm" onPress={this.onConfirmPressed} />

          <CustomButton
            text="Resend code"
            onPress={this.onResendPress}
            type="SECONDARY"
          />

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

export default ConfirmEmailScreen;
