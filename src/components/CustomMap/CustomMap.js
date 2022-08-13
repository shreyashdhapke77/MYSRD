import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import MapView from 'react-native-maps';
import Logo from '../../../assets/images/my_img.png';

const styles = StyleSheet.create({
  logo: {
    width: '20%',
    height: 50,
  },
  container: {
    flex: 1,
    maxHeight: 60,
    alignContent: 'flex-end',
  },
});

class CustomMap extends React.Component {
  render() {
    const profileAction = () => {
      this.props.navigation.navigate('Profile');
    };

    return (
      <>
        <View style={StyleSheet.absoluteFillObject}>
          <MapView style={StyleSheet.absoluteFillObject}>
            <View style={styles.container}>
              <TouchableOpacity onPress={profileAction}>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          </MapView>
        </View>
      </>
    );
  }
}

export default CustomMap;
