import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';
import Perfil from './src/screens/Perfil';
import Configuracao from './src/screens/Configuracao';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
// import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
// const Drawer = createDrawerNavigator()

// const DrawerNavigator = ({route}) => {
//   const {nome} = route.params
//   return(
//      <Drawer.Navigator >
//       <Drawer.Screen name="Perfil" component={Perfil} 
//         initialParams={{ nome: nome }} options={{ headerShown: false }}
//       />
//       <Drawer.Screen name="Configuracao" component={Configuracao} 
//         options={{ headerShown: false }}
//       />
//     </Drawer.Navigator>
//   )
// }

const TabNavigator = ({route}) => {
  const { nome } = route.params;
  return(
    <Tab.Navigator >
      <Tab.Screen name="Perfil" component={Perfil} 
        initialParams={{ nome: nome }} options={{ headerShown: false }}
        options={{tabBarIcon: ({color, size}) => (
          <Ionicons name='person' size={size} color={'green'} />
        )}}/>
      <Tab.Screen name="Configuracao" component={Configuracao} 
         options={{ headerShown: false }}
        options={{tabBarIcon: ({color, size}) => (
          <Ionicons name='settings' size={size} color={'green'} />
        )}}/>
    </Tab.Navigator>
  )
}

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
