import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const imagemFundo = require('../../assets/fundo.png');

export function TelaDeFundo( { children } ) {
  return (
    <LinearGradient
      colors={['rgba(248,244,255,0.0)', 'rgba(239,240,244,1.0)']}
      style={styles.linearGradient}
    >
      <ImageBackground 
        source={imagemFundo} 
        style={styles.image}
        imageStyle={{
          opacity: 0.2,
          resizeMode: "cover",
          height: '70%',
        }}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}