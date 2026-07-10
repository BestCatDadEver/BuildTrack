import React, { useState } from "react"
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native"
import styles from "../styles" // Tu archivo de estilos externo

export const FrenteObra = ({ cerrarModal }) => {
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}> 
        
        <View style={styles.header}>
          <Text style={styles.title}>Nuevo Frente de Obra</Text>
        </View>

        <View>
          <TextInput 
            style={styles.input} 
            placeholder="Nombre" 
            placeholderTextColor="#9A958A" 
            value={nombre} 
            onChangeText={setNombre} 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Direccion" 
            placeholderTextColor="#9A958A" 
            value={direccion} 
            onChangeText={setDireccion} 
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Agregar</Text>
          </Pressable>
          
          <Pressable style={[styles.secondaryButton, { marginTop: 10 }]} onPress={cerrarModal}>
            <Text style={styles.secondaryButtonText}>Cancelar</Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  )
}