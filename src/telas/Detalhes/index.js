import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import { InformacoesUsuario } from '../../componentes/InformacoesUsuario';
import Icon from 'react-native-vector-icons/MaterialIcons';
import mapa from '../../assets/mapa.png';
import styles from './styles';
import Animated, {useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function Detalhes(props) {
  const dados = props.route.params;

  const posicao = useSharedValue(0);

  const estiloAnimado = useAnimatedStyle(()=> {
    return {
      transform: [
        {
          translateX: withSpring(posicao.value)
        }
      ]
    }
  })

  function alterarPosicaoBloco(){
    posicao.value = Math.random()* 255;
  }

  return (
    <TelaDeFundo>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        
        <Animated.View style={[{ backgroundColor: 'green', width: 50, height: 50 }, estiloAnimado]} />

        <Button title='Mova' onPress={alterarPosicaoBloco} />

        <InformacoesUsuario
          nome={dados.nome}
          detalhes="Cliente desde 2018"
          foto={dados.foto}
        />
          <View style={styles.detalhesMedia}>
            <View style={styles.media}>
              <Text style={styles.subtitulo}>Tempo médio de cada consulta</Text>
              <View style={[styles.circulo, { borderColor: '#FFB050' }]}>
                <Text style={styles.circuloTexto}>52 min</Text>
              </View>
            </View>
            <View style={styles.media}>
              <Text style={styles.subtitulo}>Número de consultas</Text>
              <View style={styles.circulo}>
                <Text style={styles.circuloTexto}>22</Text>
              </View>
            </View>
          </View>


          <Text style={styles.subtitulo}>Anotações sobre a paciente</Text>
          <Text style={styles.detalhes}>{dados.sobre}</Text>

          <Text style={styles.subtitulo}>Endereço</Text>
          <Image style={styles.imagemMapa} source={mapa} />
          <Text>{dados.endereco}</Text>
          <TouchableOpacity 
            style={styles.botao} 
          >
            <Text style={styles.botaoTexto}>Notificar consulta</Text>
              <Icon 
                name={'notifications-none'} 
                size={20} 
                color="#FFF"
              />
          </TouchableOpacity>
      </ScrollView>
    </TelaDeFundo>
  )
}