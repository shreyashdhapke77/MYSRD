import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    height: 40,
  },
});

export default class CustomInput extends React.Component {
  static propTypes = {
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    onSubmitEditing: PropTypes.func,
    onBlur: PropTypes.func,
    editable: PropTypes.bool,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    bColor: PropTypes.string,
  };

  static defaultProps = {
    onChangeText: () => {},
    value: '',
    onSubmitEditing: () => {},
    onBlur: () => {},
    editable: true,
    placeholder: '',
    secureTextEntry: false,
    bColor: '#e8e8e8',
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {borderColor: this.props.bColor ? this.props.bColor : '#e8e8e8'},
        ]}>
        <TextInput
          value={this.props.value ? this.props.value : ''}
          onSubmitEditing={() => this.props.onSubmitEditing()}
          onBlur={() => this.props.onBlur()}
          multiline={this.props.isDescription ? true : false}
          onChangeText={text => this.props.onChangeText(text)}
          editable={this.props.editable}
          placeholder={this.props.placeholder}
          style={styles.input}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
}
