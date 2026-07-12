import React from "react"
import { Pressable, Text, View } from "react-native"
import styles from "../styles"

export const CardContratista = ({contratista, eliminar }) => {
  return (
    <View style={styles.carta}>
      <Text style={styles.buttonText}>{contratista.nombre}</Text>
      <Text style={styles.buttonText}>{contratista.apellido}</Text>
      <Text style={styles.buttonText}>{contratista.especialidad}</Text>
{/* solo si existe eliminar muestra sino no */}
      {eliminar && (
        <Pressable 
          style={styles.deleteButton} 
          onPress={() => eliminar(contratista.id)}>
          <Text style={styles.buttonText}>X</Text>
        </Pressable>)}
    </View>
  )
}
