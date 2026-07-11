import React from 'react'
import { View } from 'react-native'

export const Cartas = ({tarea}) => {
  return (
    <View style={styles.hab}>
      <Text style={styles.Texto}>{tarea.title}</Text>

      <Text style={styles.Texto}>Usuario : {tarea.userId}</Text>
      <Text style={styles.Texto}>{tarea.completed? "Completada" : "Incompleta"}</Text>
    </View>
  )
}

// codigo reutilizado sto voy a hacer que se genere con la info de contratista y frente de obra
