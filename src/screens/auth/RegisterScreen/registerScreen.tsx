import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {backgroundImage} from '../../../components/image';
import {HeaderSize, paraSmallSize} from '../../../components/fontSize';
import {Black, White} from '../../../components/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputComponent from '../../../components/inputComponent';
import {useForm} from 'react-hook-form';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../../components/button';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {error},
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const [check, setChecked] = useState(false);

  const RegisterData = (data: any) => {
    {
      check ? console.log(data) : Alert.alert('Please fill all detail');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.RegisterScreen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.imageStyle}>
          <Text style={styles.mainText}>Welcome to Jal Rakshak</Text>
          <View style={styles.RegisterView}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>Sign Up</Text>
              <Text style={styles.pageNumber}>
                {nextPage ? 'Step 2/2' : 'Step 1/2'}
              </Text>
            </View>
            <View>
              {!nextPage ? (
                <View>
                  <InputComponent
                    placeholder="First Name"
                    control={control}
                    name="firstName"
                    keyboard={'email-address'}
                    secureKey={false}
                    rules={{
                      require: 'First Name',
                      pattern: {
                        value: '',
                        message: 'Invalid Name!!!',
                      },
                    }}
                  />
                  <InputComponent
                    placeholder="Last Name"
                    control={control}
                    name="lastName"
                    keyboard={'email-address'}
                    secureKey={false}
                    rules={{
                      require: 'First Name',
                      pattern: {
                        value: '',
                        message: 'Invalid Name!!!',
                      },
                    }}
                  />
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
                  <InputComponent
                    placeholder="Phone number"
                    control={control}
                    name="mobileNumber"
                    keyboard={'number-pad'}
                    secureKey={false}
                    rules={{
                      require: 'Phone is Required',
                      pattern: {
                        value: 10,
                        message:
                          'Phone should not be minimum 10 number long!!!',
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
                        message:
                          'Password should not be minimum 3 character long',
                      },
                    }}
                  />
                  <View style={{alignItems: 'center'}}>
                    <Button
                      btnText="Next"
                      onPress={() => setNextPage(!nextPage)}
                    />
                  </View>
                </View>
              ) : (
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{marginBottom: hp('12%')}}>
                  <InputComponent
                    placeholder="Address Line 1"
                    control={control}
                    name="addressLine1"
                    keyboard={'email-address'}
                    secureKey={false}
                    rules={{
                      require: 'Address is required',
                      pattern: {
                        value: 3,
                        message:
                          'Address should not be minimum 3 character long',
                      },
                    }}
                  />
                  <InputComponent
                    placeholder="Address Line 2"
                    control={control}
                    name="addressLine2"
                    keyboard={'email-address'}
                    secureKey={false}
                    rules={{
                      require: 'Address is required',
                      pattern: {
                        value: 3,
                        message:
                          'Address should not be minimum 3 character long',
                      },
                    }}
                  />
                  <InputComponent
                    placeholder="City"
                    control={control}
                    name="city"
                    keyboard={'email-address'}
                    secureKey={false}
                    rules={{
                      require: 'city is required',
                      pattern: {
                        value: 3,
                        message:
                          'Password should not be minimum 3 character long',
                      },
                    }}
                  />
                  <InputComponent
                    placeholder="District"
                    control={control}
                    name="district"
                    keyboard={'email-address'}
                    secureKey={false}
                    rules={{
                      require: 'District is required',
                      pattern: {
                        value: 3,
                        message:
                          'District should not be minimum 3 character long',
                      },
                    }}
                  />
                  <InputComponent
                    placeholder="State"
                    control={control}
                    name="state"
                    keyboard={'email-address'}
                    secureKey={false}
                    rules={{
                      require: 'State is required',
                      pattern: {
                        value: 3,
                        message: 'State should not be minimum 3 character long',
                      },
                    }}
                  />
                  <InputComponent
                    placeholder="Country"
                    control={control}
                    name="country"
                    keyboard={'email-address'}
                    secureKey={false}
                    rules={{
                      require: 'country is required',
                      pattern: {
                        value: 0,
                        message:
                          'country should not be minimum 3 character long',
                      },
                    }}
                  />
                  <InputComponent
                    placeholder="Society ID"
                    control={control}
                    name="groupId"
                    keyboard={'email-address'}
                    secureKey={false}
                    rules={{
                      require: 'Society ID is required',
                      pattern: {
                        value: 0,
                        message:
                          'Society Id should not be minimum 3 character long',
                      },
                    }}
                  />
                  <View style={styles.textView}>
                    <TouchableOpacity onPress={() => setChecked(!check)}>
                      {check ? (
                        <AntDesign name="checksquare" size={24} color="black" />
                      ) : (
                        <Icon name="square" size={30} color="#000" />
                      )}
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                      }}>
                      <Text style={styles.signedText}>
                        By clicking Create account ,I agree that I have read and
                        accepted the
                      </Text>
                      <View style={styles.termsView}>
                        <TouchableOpacity>
                          <Text style={styles.buttonColor}>Terms of use</Text>
                        </TouchableOpacity>
                        <Text
                          style={{
                            color: Black,
                            fontSize: paraSmallSize,
                            margin: 6,
                          }}>
                          and
                        </Text>
                        <TouchableOpacity>
                          <Text style={styles.buttonColor}>Privacy Policy</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Button
                      btnText="Register"
                      onPress={handleSubmit(RegisterData)}
                    />
                  </View>
                </ScrollView>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: Black,
                    fontSize: paraSmallSize,
                    margin: 6,
                  }}>
                  Already have an account?
                </Text>
                <TouchableOpacity>
                  <Text style={styles.buttonColor}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  RegisterScreen: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
  },
  mainText: {
    textAlign: 'center',
    top: hp('5%'),
    fontSize: HeaderSize,
    color: White,
  },
  RegisterView: {
    backgroundColor: White,
    padding: 12,
    position: 'absolute',
    bottom: 0,
    height: hp('80%'),
    width: wp('100%'),
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
  },
  headerText: {
    padding: 12,
    fontSize: HeaderSize,
    color: Black,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  pageNumber: {
    fontSize: hp('1.9%'),
    color: '#919EB2',
  },
  textView: {
    flexDirection: 'row',
    padding: 12,
  },
  signedText: {
    fontSize: paraSmallSize,
    width: wp('70%'),
    marginLeft: 12,
  },
  termsView: {
    flexDirection: 'row',
    // padding: 6,
    marginLeft: 6,
    alignItems: 'center',
  },
  buttonColor: {
    color: '#1A9BEF',
    fontSize: paraSmallSize,

    fontWeight: '600',
  },
});
