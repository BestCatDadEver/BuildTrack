import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegation } from './src/navigation/Navegation';
import { Prueba } from './src/components/Prueba'
import Contratistas from './src/components/Contratistas';


export default function App() {
  return (
    <Contratistas/>
  );
}