import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen/SignInScreen.js';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen.js';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen.js';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen.js';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen.js';
import HomeScreen from '../screens/HomeScreen/HomeScreen.js';
import AboutScreen from '../screens/AboutScreen/AboutScreen.js';
import {Image} from 'react-native';
import MoviesListScreen from '../screens/MoviesList/MoviesListScreen.js';
import MovieDetailsScreen from '../screens/MoviesList/MovieDetailsScreen.js';
import TopRatedMoviesScreen from '../screens/MoviesList/TopRatedMoviesScreen.js';
import LatestMoviesScreen from '../screens/MoviesList/LatestMoviesScreen.js';
import NowPlayingMoviesScreen from '../screens/MoviesList/NowPlayingMoviesScreen.js';
import UpcomingMoviesScreen from '../screens/MoviesList/UpcomingMoviesScreen.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="MoviesList" component={MoviesListScreen} />
        <Stack.Screen
          name="NowPlayingMovies"
          component={NowPlayingMoviesScreen}
        />
        <Stack.Screen name="LatestMovies" component={LatestMoviesScreen} />
        <Stack.Screen name="TopRatedMovies" component={TopRatedMoviesScreen} />
        <Stack.Screen name="UpcomingMovies" component={UpcomingMoviesScreen} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({navigation}) => ({
            title: 'Awesome app',
            headerLeft: () => (
              <Image onPress={() => navigation.toggleDrawer()} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
