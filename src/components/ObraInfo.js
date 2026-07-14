import React from "react"
import { Pressable, Text, View } from "react-native"
import styles from "../styles"
import { useNavigation } from "@react-navigation/native"

export const ObraInfo = ({ obra, eliminar, modificar }) => {

  const navegation = useNavigation()

  return (
    <View style={styles.carta}>
      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>{obra.nombre}</Text>
        <Text style={styles.detalle}>Fecha de inicio: {obra.fecha_inicio}</Text>
        <Text style={styles.detalle}>Fecha de fin estimada: {obra.fecha_fin_estimada}</Text>
        <Text style={styles.detalle}>Descripción: {obra.descripcion}</Text>
      </View>
      <View>
        <Pressable style={[styles.modificarButton]}
          onPress={() => navegation.navigate("AltaObra", { accion: "modificar", obra })}>
          <Text style={styles.modificarButtonText}>Modificar</Text>
        </Pressable>
        <Pressable style={[styles.eliminarButton, styles.margintop]} onPress={() => eliminar(obra.id)}>
          <Text style={styles.eliminarButtonText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  )
}
