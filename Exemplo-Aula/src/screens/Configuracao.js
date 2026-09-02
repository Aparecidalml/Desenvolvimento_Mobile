import React from 'react';

import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function Inicial() {
  return (
    <View style={styles.container}>     
      <Text style={styles.nome}>Página Incial!</Text> 
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
