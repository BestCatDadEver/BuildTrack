import React, { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

export const FormContratista = () => {
  const [nombre, setNombre] = useState()
  const [especialidad, setEspecialidad] = useState()
  const [telefono, setTelefono] = useState()

  return (
    <View>
      <View>
        <TextInput style={style.input} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
        <TextInput style={style.input} placeholder="Especialidad" value={especialidad} onChangeText={setEspecialidad} />
        <TextInput style={style.input} placeholder="Telefono" value={telefono} onChangeText={setTelefono} />
      </View>
      <View>
        <Pressable>
          <Text>Agregar</Text>
        </Pressable>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },
})
