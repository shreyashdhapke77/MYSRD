import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from '../screens/AboutScreen/AboutScreen';

const screens = {
  About: {
    screen: AboutScreen,
  },
};

const AboutStack = createNativeStackNavigator(screens);

export default AboutStack;
