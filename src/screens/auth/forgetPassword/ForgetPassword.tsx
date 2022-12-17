import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {backgroundImage, forgetPass} from '../../../components/image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Black, White} from '../../../components/color';
import {HeaderSize, paraSize} from '../../../components/fontSize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputComponent from '../../../components/inputComponent';
import {useForm} from 'react-hook-form';
import Button from '../../../components/button';

const ForgetPassword = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {error},
  } = useForm<FormData>();

  const [mail, sendMail] = useState(false);
  const ResetPassword = (data: any) => {
    console.log('data', data);
    sendMail(!mail);
  };

  return (
    <KeyboardAvoidingView
      style={styles.forgetView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.imageStyle}>
          <Text style={styles.mainText}>Welcome to Jal Rakshak</Text>
          <View style={styles.forgetText}>
            {!mail ? (
              <>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}>
                  <AntDesign name="left" size={24} color="black" />
                  <Text style={styles.backText}>Back to Sign In</Text>
                </TouchableOpacity>

                <View style={styles.ForgetPassView}>
                  <Text style={styles.textForget}>Forgot Password</Text>
                  <InputComponent
                    placeholder="Email Address"
                    control={control}
                    name="email"
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
                  <View style={{alignItems: 'center'}}>
                    <Button
                      btnText="Reset Password"
                      onPress={handleSubmit(ResetPassword)}
                    />
                  </View>
                </View>
              </>
            ) : (
              <View style={styles.forgotPass}>
                <Text style={styles.forgotText}>Forgot Password</Text>
                <Image source={forgetPass} style={styles.forgetPass} />
                <Text style={styles.forgotText}>Email Sent</Text>
                <Text style={styles.textPara}>
                  We have sent you a Reset Link in your registered email ID.
                  Please check to confirm or Click Here if not received any
                  email with reset password link. Thank you!
                </Text>
              </View>
            )}
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  forgetView: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
  },
  forgetText: {
    backgroundColor: White,
    padding: 12,
    position: 'absolute',
    bottom: 0,
    height: hp('50%'),
    width: wp('100%'),
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
  },
  mainText: {
    textAlign: 'center',
    top: hp('20%'),
    fontSize: HeaderSize,
    color: White,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  backText: {
    marginLeft: 12,
    fontSize: paraSize,
    color: '#000',
  },
  ForgetPassView: {
    flexDirection: 'column',
    justifyContent: 'center',
    top: hp('4%'),
    padding: 12,
  },
  textForget: {
    fontSize: HeaderSize,
    margin: 12,
    color: '#000',
  },
  forgotPass: {
    padding: 12,
    alignItems: 'center',
  },
  forgotText: {
    fontSize: HeaderSize,
    padding: 12,
    color: Black,
  },
  forgetPass: {
    height: hp('12.3%'),
    width: wp('27%'),
  },
  textPara: {
    fontSize: paraSize,
    textAlign: 'center',
    color: '#000',
  },
});
