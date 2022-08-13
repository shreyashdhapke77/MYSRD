import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';

const RootDrawerNavigator = createDrawerNavigator({
  Profile: {
    screen: ProfileScreen,
  },
  About: {
    screen: AboutScreen,
  },
});

export default createAppContainer(RootDrawerNavigator);
