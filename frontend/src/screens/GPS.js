import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native"
import * as Location from 'expo-location'
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps'

async function localizacaoAtual(setLocation) {
    try {
        const servicoAtivo = await Location.hasServicesEnabledAsync()
        if (!servicoAtivo) {
            alert('Ative a localização!')
            return
        }
        const { status } = await Location.getForegroundPermissionsAsync()
        if (status !== 'granted') {
            alert('Permissão negada!')
            return
        }
        const localizacaoCorrente = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced
        })

        const [endereco] = await Location.reverseGeocodeAsync({latitude: localizacaoCorrente.coords.latitude, 
            longitude: localizacaoCorrente.coords.longitude})
        
        setLocation({
            latitude: localizacaoCorrente.coords.latitude,
            longitude: localizacaoCorrente.coords.longitude,
            address: /*endereco ? [endereco.street, endereco.city, endereco.country].filter(Boolean).joy(',') 
             || 'Não disponível' :*/ 'Não disponível'
       
        })

    } catch (error) {
        console.log(error)
        alert('Localização não encontrada!')
    }

}

export default function GPS() {
    const [location, setLocation] = useState("")

    useEffect(() => {
        localizacaoAtual(setLocation)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.texto}> Info Localização {'\n'} </Text>
            {location ? (
            <Text style={styles.texto}>
                Latitude: {location.latitude} {'\n'}
                Logitude: {location.longitude} {'\n'}
                Endereço: {location.address} {'\n'}
            </Text>
            ):(
                 <Text style={styles.texto}> Procurando localização...</Text>
            )}
            <MapView style={styles.mapa}
                provider={PROVIDER_DEFAULT}
                mapType="standard"
                showsUserLocation={true}                           
            >

            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 30,
        paddingTop: 80,
        backgroundColor: "#FFFFFF",
    },
    texto: {
        fontSize: 26,
        fontWeight: "bold",
    },
    mapa:{
        flex: 1,
        width: 350,
        height: 30
    }
})
