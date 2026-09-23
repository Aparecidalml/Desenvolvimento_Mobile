import React from 'react';

import { View, Text, Image, Pressable, StyleSheet, Button } from 'react-native';

export default function Configuracao({navigation}) {
  return (
    <View style={styles.container}>     
      <Text style={styles.nome}>Configurações {'\n'}</Text> 
      <Button
        title="📋Informações"
        onPress={() => navigation.navigate('Info')}
      />
      <Text> {'\n'} </Text>
      <Button
        title="SAIR"
        onPress={() => navigation.navigate('Login')}
      />
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
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
  }  
});
