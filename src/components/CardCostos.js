import React from "react"
import { Pressable, Text, View } from "react-native"
import styles from "../styles"

export const CardCostos = ({ costo, eliminar }) => {
  return (
    <View style={styles.carta}>
      <Text style={styles.buttonText}>{costo.tipo_costo}</Text>
      <Text style={styles.buttonText}>{costo.monto}</Text>

      <Pressable style={styles.deleteButton} onPress={() => eliminar(costo.id)}>
        <Text style={styles.buttonText}>X</Text>
      </Pressable>
    </View>
  )
}
