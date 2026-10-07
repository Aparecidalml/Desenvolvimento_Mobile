import React, { useEffect, useState } from 'react';

import { View, Text, Image, Pressable, StyleSheet, FlatList } from 'react-native';

import { listarUsuarios } from '../services/usuarioService';


export default function ConsultaUsuario() {

    const [usuario, setusuario] = useState(null)

    useEffect(() => {
        async function carregarUsuario() {
            const usuarios = await listarUsuarios();
            setusuario(usuarios)
        }
        carregarUsuario()

    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Usuários</Text>
            <FlatList
                data={usuario}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.container}>                    
                        <Text style={styles.texto}>Nome: {item.nome}</Text>
                        <Text style={styles.texto}>Email: {item.email}</Text>
                    </View>

                )}
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
    texto: {
        fontSize: 26,
        fontWeight: 'bold',
    }
});
