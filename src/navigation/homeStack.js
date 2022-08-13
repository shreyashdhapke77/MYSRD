import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const screens = {
  Profile: {
    screen: ProfileScreen,
  },
};

const HomeStack = createNativeStackNavigator(screens);

export default HomeStack;
