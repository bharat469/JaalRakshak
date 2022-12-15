import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {White} from './color';
import { paraSize} from './fontSize';

const Button = (props: any) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['#1A9BEF', '#10C44F']}
        style={styles.linearGradient}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}>
        <Text style={styles.buttonText}>{props.btnText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  linearGradient: {
    padding: 15,
    justifyContent: 'center',
    width: wp('60%'),
    alignItems: 'center',
    borderRadius: 28,
  },
  buttonText: {
    color: White,
    fontSize: paraSize,
    fontWeight: '700',
  },
});
