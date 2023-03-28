import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: moderateScale(200),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextStyle: {
    fontSize: scale(30),
    fontWeight: 'bold',
    color: '#fff',
  },
  inputStyle: {
    borderBottomColor: 'rgba(0,0,0,.08)',
    borderRadius: moderateScale(4),
    borderBottomWidth: 1,
    height: moderateScale(44),
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(44),
  },
  labelStyle: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: scale(14),
  },
});
export default styles;
