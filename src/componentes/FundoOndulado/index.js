import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styles from './styles';

export default function FundoOndulado({ children, height=250 }) {
  return (
    <View style={[styles.container, { height: height }]}>
      <Svg
        height={85}
        width={Dimensions.get('screen').width}
        viewBox="0 0 1440 320"
        style={{
          position: 'absolute',
          bottom: height,
        }}
      >
        <Path
          fill="#FFFFFF"
          d="M0,320L120,277.3C240,235,480,149,720,122.7C960,96,1200,128,1320,144L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </Svg>
      {children}
    </View>
  );
}