import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import Logo from '../../../assets/images/my_img.png';
import {Colors} from '../../styles';
import {ToastMessage} from '../../helpers/ToastMessage';
import {getSessionId} from '../../helpers/LocalStorage';

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
    height: '90%',
    backgroundColor: Colors.GRAY_LIGHT,
  },
  logo: {
    width: '70%',
    maxWidth: 200,
    maxHeight: 150,
    marginBottom: 20,
  },
  signOut: {
    width: '100%',
    padding: 20,
  },
});

class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      userName: '',
      email: '',
      mobile: '',
      isEditable: false,
      sessionId: '',
    };
  }

  componentDidMount = async () => {
    const userSessionId = await getSessionId();
    this.setState({sessionId: userSessionId});
    this.getUserDetails(this.state.sessionId);
  };

  getUserDetails = async sessionId => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/account?api_key=28cdf46619e7d18e948d072ccb6f0fbb&session_id=${sessionId}`,
        requestOptions,
      );
      const result = await response.json();
      if (result) {
        this.setState({name: result.name});
        this.setState({userName: result.username});
      } else {
        ToastMessage.showErrorMessage('Error', result.status_message);
      }
    } catch (error) {
      console.log('error  == ', error);
    }
  };

  signOut = () => {
    Alert.alert('Are you sure you want to sign out', '', [
      {
        text: 'Yes',
        onPress: () => {
          this.props.navigation.navigate('SignIn');
        },
      },
      {text: 'Cancel', onPress: () => {}},
    ]);
  };

  editProfile = () => {
    this.setState({isEditable: true});
  };

  saveProfile = () => {
    this.setState({isEditable: false});
    ToastMessage.showSuccessMessage('Success', 'Profile updated successfully');
  };

  cancelAction = () => {
    this.setState({isEditable: false});
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
            multiline={false}
            value={this.state.name ? this.state.name : ''}
            onChangeText={text => {
              this.setState({name: text});
            }}
            editable={this.state.isEditable}
            placeholder={'Name'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />

          <CustomInput
            multiline={false}
            value={this.state.userName ? this.state.userName : ''}
            onChangeText={text => {
              this.setState({userName: text});
            }}
            editable={this.state.isEditable}
            placeholder={'Username'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />
          <CustomInput
            multiline={false}
            value={this.state.email ? this.state.email : ''}
            onChangeText={text => {
              this.setState({email: text});
            }}
            editable={this.state.isEditable}
            placeholder={'email'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />
          <CustomInput
            multiline={false}
            value={this.state.mobile ? this.state.mobile : ''}
            onChangeText={text => {
              this.setState({mobile: text});
            }}
            editable={this.state.isEditable}
            placeholder={'Phone Number'}
            secureTextEntry={false}
            onSubmitEditing={() => {}}
          />
          {!this.state.isEditable ? (
            <CustomButton
              text="Edit Profile"
              onPress={this.editProfile}
              type="PRIMARY"
            />
          ) : null}
          {this.state.isEditable ? (
            <>
              <CustomButton
                text="Save"
                width={'20%'}
                onPress={this.saveProfile}
                type="PRIMARY"
              />
              <CustomButton
                text="Cancel"
                width={'20%'}
                onPress={this.cancelAction}
                bgColor="#e3e3e3"
                fgColor="#363636"
              />
            </>
          ) : null}
        </View>
        <View style={styles.signOut}>
          <CustomButton text="Sign Out" onPress={this.signOut} type="SIGNOUT" />
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
