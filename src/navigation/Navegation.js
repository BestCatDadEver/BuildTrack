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
          borderRadius: 24,
          marginHorizontal: 12,
          marginBottom: 10,
          borderTopWidth: 0,
          height: 60,
          backgroundColor: "transparent",
          elevation: 0,
          paddingBottom: 8,
        },
        headerStyle: {
          backgroundColor: "#1B365D",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "rgba(255,255,255,0.45)",
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}>
      <Tab.Screen
        name="Contratistas"
        component={AltaContratista}
        options={{ tabBarLabel: "Agregar Contratistas", tabBarIcon: () => <FontAwesome name="pause" size={24} color="black" /> }}
      />
      <Tab.Screen
        name="Listar"
        component={Listado}
        options={{ tabBarLabel: "Listar", tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> }}
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
        <Stack.Navigator>
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
