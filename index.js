
import { NativeModules } from 'react-native';

const { ReactNativeLPinScreen } = NativeModules;

export const unlock = () => {
  ReactNativeLPinScreen.pin();
  ReactNativeLPinScreen.turnScreenOn();
};

export const lock = () => {
  ReactNativeLPinScreen.unpin();
  ReactNativeLPinScreen.turnScreenOff();
};

export default ReactNativeLPinScreen;
