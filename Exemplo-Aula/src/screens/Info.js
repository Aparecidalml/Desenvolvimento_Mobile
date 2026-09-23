import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import * as Device from 'expo-device'

export default function Info({ navigation }) {  
  return (
    <View style={styles.container}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
        
      <Text style={styles.texto}>{'\n'} Informações do App {'\n'}  </Text>

      <Text style={styles.texto}>
        Nome do Dispositivo: {Device.deviceName} {'\n'}
        SO: {Device.osName} {'\n'}
        Marca:{Device.manufacturer} {'\n'}
        Modelo: {Device.modelName} {'\n'}
        Versão OS: {Device.osVersion} {'\n'}
        Dispositivo Virtual: {Device.isDevice ? 'Não' : 'Sim'} {'\n'}
       
      </Text>


     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#FFFFFF',
  },
  texto: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'blue',
  }
});
