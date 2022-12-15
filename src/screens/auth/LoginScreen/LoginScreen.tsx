import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {backgroundImage} from '../../../components/image';
import {White} from '../../../components/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderSize, paraSize} from '../../../components/fontSize';
import {useForm} from 'react-hook-form';
import InputComponent from '../../../components/inputComponent';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../../components/button';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {error},
  } = useForm<FormData>();

  const [check, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <KeyboardAvoidingView
      style={styles.LoginScreen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.imageStyle}>
          <Text style={styles.mainText}>Welcome to Jal Rakshak</Text>
          <View style={styles.loginView}>
            <Text style={styles.headerText}>Sign In</Text>
            <View>
              <InputComponent
                placeholder="Email Address"
                control={control}
                name="EmailSignIn"
                keyboard={'email-address'}
                secureKey={false}
                rules={{
                  require: 'Email is Invalid',
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Invalid Email!!!',
                  },
                }}
              />
              <InputComponent
                placeholder="Password"
                control={control}
                name="Password"
                keyboard={'email-address'}
                icon={<Entypo name="eye" size={24} color="black" />}
                onPressSecurity={() => setShowPassword(!showPassword)}
                secureKey={showPassword}
                rules={{
                  require: 'Password is Invalid',
                  pattern: {
                    value: 3,
                    message: 'Password should not be minimum 3 character long',
                  },
                }}
              />
              <View style={styles.keepView}>
                <TouchableOpacity onPress={() => setChecked(!check)}>
                  {check ? (
                    <AntDesign name="checksquare" size={24} color="black" />
                  ) : (
                    <Icon name="square" size={30} color="#000" />
                  )}
                </TouchableOpacity>
                <Text style={styles.signedText}>Keep me Signed in</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Button btnText="Sign In" />
                <TouchableOpacity style={{margin: 12}}>
                  <Text style={styles.forgetText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.simpleText}>
                  Are you new to Jal Rakshak?
                </Text>
                <TouchableOpacity style={{margin: 12}}>
                  <Text style={styles.forgetText}>Create an Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  LoginScreen: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
  },
  loginView: {
    backgroundColor: White,
    padding: 12,
    position: 'absolute',
    bottom: 0,
    height: hp('60%'),
    width: wp('100%'),
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
  },
  headerText: {
    padding: 12,
    fontSize: HeaderSize,
  },
  mainText: {
    textAlign: 'center',
    top: hp('20%'),
    fontSize: HeaderSize,
    color: White,
  },
  keepView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    marginLeft: 12,
  },
  signedText: {
    margin: 12,
    fontSize: paraSize,
  },
  forgetText: {
    fontSize: paraSize,
    color: '#1A9BEF',
    fontWeight: '600',
  },
  simpleText: {
    fontSize: paraSize,
    color: '#000',
  },
});
