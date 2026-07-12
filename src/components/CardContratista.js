import React from "react"
import { Pressable, Text, View } from "react-native"
import styles from "../styles"

export const CardContratista = ({ frente: contratista, eliminar }) => {
  return (
    <View style={styles.carta}>
      <Text style={styles.buttonText}>{contratista.nombre}</Text>
      <Pressable style={styles.deleteButton} onPress={()=>eliminar(contratista.id)}>
        <Text style={styles.buttonText}>X</Text>
      </Pressable>
    </View>
  )
}
