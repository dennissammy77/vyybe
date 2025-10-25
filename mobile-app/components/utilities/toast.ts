import Toast from 'react-native-toast-message';

export class ToastService {
  static showSuccess(message: string, title: string = 'Success') {
    Toast.show({
      type: 'success',
      text1: title,
      text2: message,
      position: 'bottom',
    });
  }

  static showError(message: string, title: string = 'Error') {
    Toast.show({
      type: 'error',
      text1: title,
      text2: message,
      position: 'bottom',
    });
  }

  static showInfo(message: string, title: string = 'Info') {
    Toast.show({
      type: 'info',
      text1: title,
      text2: message,
      position: 'bottom',
    });
  }

  static hide() {
    Toast.hide();
  }
}