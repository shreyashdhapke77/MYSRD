/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {ErrorToast, InfoToast, SuccessToast} from 'react-native-toast-message';
import Navigation from './src/navigation';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const toastConfig = {
  success: props => (
    <SuccessToast
      {...props}
      text1NumberOfLines={3}
      text1Style={{
        fontSize: 14,
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),

  info: props => (
    <InfoToast
      {...props}
      text1NumberOfLines={3}
      text1Style={{
        fontSize: 14,
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      text1NumberOfLines={3}
      text1Style={{
        fontSize: 14,
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),

  /* 
    or create a completely new type - `my_custom_type`,
    building the layout from scratch
  */
  my_custom_type: ({text1, props, ...rest}) => (
    <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
      <Text>{text1}</Text>
    </View>
  ),
};

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
      <Toast config={toastConfig} />
      {/* <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
