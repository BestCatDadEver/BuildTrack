import React from "react"
import { Pressable, Text, View } from "react-native"
import styles from "../styles"

export const CardFrente = ({ frente, eliminar }) => {
  return (
    <View style={styles.carta}>
      <Text style={styles.buttonText}>{frente.nombre}</Text>
      <Pressable style={styles.deleteButton} onPress={()=>eliminar(frente.id)}>
        <Text style={styles.buttonText}>X</Text>
      </Pressable>
    </View>
  )
}
