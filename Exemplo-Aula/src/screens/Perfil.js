import React, { useEffect, useState } from 'react';

import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import useAuth from '../contexts/AuthContext';

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Perfil() {

  //  const { usuario } = useAuth()
  const [usuario, setusuario] = useState(null)

  useEffect(() => {
    async function carregarUsuario(){
        setusuario(JSON.parse(await AsyncStorage.getItem('usuario')))
    }
    carregarUsuario()

  }, [])


  return (
    <View style={styles.container}>     
      <Text style={styles.nome}>Bem-Vindo(a) {usuario?.nome}!</Text> 
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
