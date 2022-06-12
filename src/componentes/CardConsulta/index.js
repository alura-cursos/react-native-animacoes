import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Feather';

export function CardConsulta({ nome, foto, horario, tipoConsulta, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        <Image source={foto} style={styles.foto} />
        <View style={styles.informacoes}>
          <Text style={styles.nome}>{nome}</Text>
          <View style={styles.consultaArea}>
            <Icon name={icon} size={16} color="#A3A3A3" />
            <Text style={styles.consultas}>{tipoConsulta}</Text>
          </View>
        </View>
      </View>
      <View style={styles.informacoesAgendamento}>
        <Text style={styles.texto}>{horario}</Text>
        <View style={styles.botoesArea}>
          {icon === "video" ? 
          <>
            <TouchableOpacity style={[styles.botao, { backgroundColor: '#FFB050' }]}>
              <Text style={styles.botaoTexto}>Ligar por vídeo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>Ligar por áudio</Text>
            </TouchableOpacity>
          </> :
            <TouchableOpacity style={styles.botaoLocalizacao}>
              <Text style={[styles.botaoTexto, {color: '#FFF'}]}>Ver endereço</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  );
}