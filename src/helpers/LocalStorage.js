import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeSessionId = async id => {
  try {
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
    // error reading value
    return null;
  }
};

export const deleteSessionId = async () => {
  try {
    await AsyncStorage.removeItem('session_id');
  } catch (error) {
    // Error retrieving data
  }
};
