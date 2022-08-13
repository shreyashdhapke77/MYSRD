import {Toast} from 'react-native-toast-message/lib/src/Toast';
export const ToastMessage = {
  showErrorMessage: (title, message = '') => {
    Toast.show({
      text1: title,
      text2: message,
      type: 'error',
    });
  },

  showSuccessMessage: (title, message = '') => {
    Toast.show({
      text1: title,
      text2: message,
      type: 'success',
    });
  },
};
