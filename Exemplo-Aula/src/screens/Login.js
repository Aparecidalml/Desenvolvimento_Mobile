import React, { useState } from 'react';

import { View, Text, Alert, StyleSheet, TextInput, Button } from 'react-native';

import useAuth from '../contexts/AuthContext';

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // const {nome,email, senha} = route.params
  // const nome = route.params.nome

  // const {usuario} = useAuth()

  async function entrar() {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    try{
      const usuario = JSON.parse(await AsyncStorage.getItem('usuario'))
      if(!usuario){
        Alert.alert('Erro', 'Usuário não cadastrado. Por favor, cadastre-se primeiro.');
        return;
      }
      if (email === usuario.email && senha === usuario.senha) {
        navigation.navigate('Tabs');
      } else {
        Alert.alert('Erro', 'E-mail ou senha incorretos.');
      }
    }catch(error){
      console.log(error)
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <Text> {'\n\n'} </Text>
      <Text>E-mail:</Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Text>Senha:</Text>
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <Text> {'\n\n'} </Text>
      <Button title="Entrar" onPress={entrar} />
      <Text> {'\n\n'} </Text>
      <Button
        title="Criar uma conta"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#6C63FF',
    textAlign: 'center',
  },
});
