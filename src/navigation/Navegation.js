import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import FontAwesome from "@expo/vector-icons/FontAwesome5"
// import {Listar} from "../screens/Listar"
// import {PersonaFormScreen} from '../screens/PersonaFormScreen'

// import { PersonaForm } from "./PersonaForm"

const Tab = createBottomTabNavigator()
const Mytabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Listar"
        component={Listar}
        options={{ tabBarLabel: "Listar", tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> }}
      />
      <Tab.Screen
        name="Formulario"
        component={PersonaFormScreen}
        options={{ tabBarLabel: "Formulario", tabBarIcon: () => <FontAwesome name="pause" size={24} color="black" /> }}
      />
    </Tab.Navigator>
  )
}

export const Navegation = () => {
  return (
    <NavigationContainer>
      <Mytabs />
    </NavigationContainer>
  )
}
