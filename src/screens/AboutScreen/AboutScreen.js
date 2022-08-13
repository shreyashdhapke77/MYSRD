import React from 'react';
import {Text, ScrollView} from 'react-native';

class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>About SCreen</Text>
      </ScrollView>
    );
  }
}

export default AboutScreen;
