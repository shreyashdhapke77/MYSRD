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

class NewPasswordScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      code: '',
      userName: '',
      password: '',
      isValid: false,
      isValidCode: true,
      isValidPassword: true,
    };
  }

  onSubmitPressed = () => {
    this.validData();
    if (this.state.isValid) {
      this.props.navigation.navigate('SignIn');
    }
  };

  onSignInPress = () => {
    this.props.navigation.navigate('SignIn');
  };

  validData = () => {
    if (this.state.code && this.state.password) {
      this.setState({isValid: true, isValidCode: true, isValidPassword: true});
      return ToastMessage.showSuccessMessage(
        'Success',
        'Password was reset successfully',
      );
    } else {
      if (!this.state.code && !this.state.password) {
        this.setState({
          isValid: false,
          isValidCode: false,
          isValidPassword: false,
        });
        return ToastMessage.showErrorMessage(
          'Error',
          'Please enter code and new password',
        );
      } else {
        if (!this.state.code || this.state.code.length === 0) {
          this.setState({isValidCode: false, isValid: false});
          return ToastMessage.showErrorMessage('Error', 'Please enter code');
        } else if (!this.state.password || this.state.password.length === 0) {
          this.setState({isValidPassword: false, isValid: false});
          return ToastMessage.showErrorMessage(
            'Error',
            'Please enter new password',
          );
        }
      }
    }
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>

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
            placeholder={'Code'}
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
            placeholder={'Enter New Password'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />

          <CustomButton text="Submit" onPress={this.onSubmitPressed} />

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

export default NewPasswordScreen;
