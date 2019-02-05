/**
 *
 * @format
 * @flow
 * */
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  keyLabel: {
    textAlign: 'center',
    margin: moderateScale(16),
  },
  info: {

  },
  qrcode: {
    backgroundColor: 'red',
    margin: moderateScale(8),
  },
});

export default styles;
