import React, { use, useState } from 'react';

import { View, Text, Alert, StyleSheet, TextInput, Button, Linking } from 'react-native';

import useAuth from '../contexts/AuthContext'

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // const {setUsuario} = useAuth()

  async function cadastrar() {
    if (nome === '' || email === '' || senha === '') {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    // setUsuario({ nome, email, senha })
    try{
      await AsyncStorage.setItem('usuario', JSON.stringify({ nome, email, senha }))
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error)
      Alert.alert('Erro!','Erro ao salvar o cadastro.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastre-se</Text>
      <Text> {'\n\n'} </Text>
      <Text> Nome: </Text>
      <TextInput
        label="Nome"
        placeholder="Digite seu nome"
        placeholderTextColor="gray"
        value={nome}
        onChangeText={setNome}
      />
      <Text> E-mail: </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
      />
      <Text> Senha: </Text>
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        placeholderTextColor="gray"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <Text> {'\n\n'} </Text>
      <Button title="Cadastrar" onPress={cadastrar} />
      <Text> {'\n\n'} </Text>
      <Text onPress={()=> Linking.openURL('https://www.rn.senac.br/')}> Acesse SENAC </Text>
      {/* <Text onPress={()=> Linking.openURL('https://wa.me/{}/?text={}')}> Contato via WhatsApp </Text> */}
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

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
