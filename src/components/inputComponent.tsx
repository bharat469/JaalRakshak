import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Black, borderColor} from './color';

interface inputProps {
  secureKey: boolean;
  keyboard: any;
  control: any;
  name: string;
  placeholder: string;
  rules: {};
  icon?: any;
  onPressSecurity?: any;
}

const InputComponent = (props: inputProps) => {
  return (
    <View>
      <Controller
        control={props.control}
        name={props.name}
        rules={props.rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <View
            style={[
              styles.containerStyle,
              {borderColor: error ? 'red' : borderColor},
            ]}>
            <View style={styles.InputStyle}>
              <TextInput
                placeholder={props.placeholder}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType={props.keyboard}
                style={styles.TextInputStyle}
                secureTextEntry={props.secureKey}
                placeholderTextColor={Black}
              />
              <TouchableOpacity
                style={{padding: 12}}
                onPress={props.onPressSecurity}>
                {props.icon}
              </TouchableOpacity>
            </View>
            {error && (
              <Text
                style={{
                  color: 'red',
                  left: wp('2%'),
                  padding: 2,
                  width: wp('70%'),
                }}>
                {error.message}
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  TextInputStyle: {
    color: '#000',
    width: wp('80%'),
    padding: 18,
    borderRadius: 12,
    borderColor: borderColor,
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: borderColor,
    margin: 12,
  },
  InputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
