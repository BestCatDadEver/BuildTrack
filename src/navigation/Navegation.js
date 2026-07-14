import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import FontAwesome from "@expo/vector-icons/FontAwesome5"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Listado } from "../screens/Listado"
import { AltaContratista } from "../screens/AltaContratista"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AltaObra } from "../screens/AltaObra"
// import {Listar} from "../screens/Listar"
// import {PersonaFormScreen} from '../screens/PersonaFormScreen'

// import { PersonaForm } from "./PersonaForm"
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Mytabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // borderRadius: 24,
          // marginHorizontal: 12,
          // marginBottom: 10,
          borderTopWidth: 0,
          height: 60,
          backgroundColor: "#40618f",
          elevation: 0,
          paddingBottom: 8,
        },
        headerStyle: {
          backgroundColor: "#40618f",
        },
        headerTintColor: "#f8efd8",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#f8efd8",
        tabBarInactiveTintColor: "rgba(255,255,255,0.45)",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}>
      <Tab.Screen
        name="Contratistas"
        component={AltaContratista}
        options={{ tabBarLabel: "Agregar Contratistas", tabBarIcon: () => <FontAwesome name="pause" size={24} color="#f8efd8" /> }}
      />
      <Tab.Screen
        name="Listar"
        component={Listado}
        options={{ tabBarLabel: "Listar", tabBarIcon: () => <FontAwesome name="home" size={24} color="#f8efd8" /> }}
      />
    </Tab.Navigator>
  )
}

export const Navegation = () => {
  return (
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <Mytabs />
    //   </NavigationContainer>
    // </SafeAreaProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: "#94A3B8",
            },
            headerStyle: {
              backgroundColor: "#40618f",
            },
            headerTintColor: "#f8efd8",
          }}>
          <Stack.Screen name="Inicio" component={Mytabs} options={{ headerShown: false }} />

          <Stack.Screen name="AltaObra" component={AltaObra} options={{ title: "Nueva obra" }} />

          {/* <Stack.Screen
            name="DetalleObra"
            component={DetalleObra}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Navegation
