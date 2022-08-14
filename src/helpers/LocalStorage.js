import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeSessionId = async id => {
  try {
    //   await AsyncStorage.setItem('@storage_user_id_key', id);
    await AsyncStorage.setItem('session_id', id);
  } catch (e) {
    // saving error
  }
};

export const getSessionId = async () => {
  try {
    const value = await AsyncStorage.getItem('session_id');
    if (value !== null) {
      // value previously stored
      return value;
    }
    return null;
  } catch (e) {
    console.log('eroorrrrooroorororo');
    // error reading value
    return null;
  }
};
